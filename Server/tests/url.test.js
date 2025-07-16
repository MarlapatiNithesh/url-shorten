require('dotenv').config();
const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const Url = require('../models/Url');
const urlRoutes = require('../routes/url.routes');

jest.setTimeout(15000);

const app = express();
app.use(express.json());
app.use('/', urlRoutes);

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterEach(async () => {
  await Url.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
});

test('POST /api/shorten should return a valid short URL', async () => {
  const res = await request(app)
    .post('/api/shorten')
    .send({ originalUrl: 'https://www.google.com' });

  expect(res.statusCode).toBe(201);
  expect(res.body.shortUrl).toContain('http://localhost:5000/');
});
