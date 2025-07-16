const mongoose = require('mongoose');
const shortid = require('shortid');
const validator = require('validator');

const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
    validate: {
      validator: (v) => validator.isURL(v),
      message: 'Invalid URL',
    },
  },
  shortId: {
    type: String,
    required: true,
    unique: true,
  },
  clicks: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

urlSchema.pre('validate', function (next) {
  if (!this.shortId) {
    this.shortId = shortid.generate();
  }
  next();
});

module.exports = mongoose.model('Url', urlSchema);



