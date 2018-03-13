const mongoose = require('mongoose');
const { Schema } = mongoose;

const portfolioSchema = new Schema({
  provider: String,
  amount: Number,
  dateReceived: Date,
  interest: Number,
  type: String,
  paidToDate: Number,
  repaid: { type: Boolean, default: false },
  dateAdded: Date
});

var portfolio = mongoose.model('portfolios', portfolioSchema)
module.exports = portfolio;