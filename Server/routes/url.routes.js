// routes/url.routes.js
const express = require('express');
const router = express.Router();
const Url = require('../models/Url');
const shortid = require('shortid');

router.post('/api/shorten', async (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl || !originalUrl.startsWith('http')) {
    return res.status(400).json({ error: 'Invalid URL' });
  }

  try {
    const existing = await Url.findOne({ originalUrl });
    if (existing) {
      return res.json({
        originalUrl: existing.originalUrl,
        shortUrl: `http://localhost:5000/${existing.shortId}`,
      });
    }

    const shortIdValue = shortid.generate();
    const newUrl = await Url.create({ originalUrl, shortId: shortIdValue });

    res.status(201).json({
      originalUrl: newUrl.originalUrl,
      shortUrl: `http://localhost:5000/${newUrl.shortId}`,
    });
  } catch (err) {
    console.error('Error creating short URL:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({ shortId: req.params.code });
    if (!url) return res.status(404).send('Short URL not found');

    url.clicks += 1;
    await url.save();

    res.redirect(url.originalUrl);
  } catch (err) {
    console.error('Error redirecting:', err);
    res.status(500).send('Server error');
  }
});

router.get('/api/stats/:code', async (req, res) => {
  try {
    const url = await Url.findOne({ shortId: req.params.code });
    if (!url) return res.status(404).json({ error: 'Short URL not found' });

    res.json({
      originalUrl: url.originalUrl,
      shortId: url.shortId,
      clicks: url.clicks,
      createdAt: url.createdAt,
    });
  } catch (err) {
    console.error('Error fetching stats:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;



