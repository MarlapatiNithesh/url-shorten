const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const urlRoutes = require('./routes/url.routes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/', urlRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(5000, () => console.log('Server running on port 5000'));
}).catch(console.error);
