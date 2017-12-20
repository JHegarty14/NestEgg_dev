const mongoose = require('mongoose');
const { Schema } = mongoose;

const portfolioSchema = new Schema({
  source: String,
  total: Number,
  interest: Number,
  type: String,
  repaid: { type: Boolean, default: false }
});

module.exports = portfolioSchema;
