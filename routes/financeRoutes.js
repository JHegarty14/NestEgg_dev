const express = require('express');
const app = express.Router();
const mongoose = require('mongoose');
const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');
const Recipient = mongoose.model('portfolios');
const User = mongoose.model('users');
mongoose.Promise = global.Promise


const portData = {
    provider: null,
    amount: null,
    dateReceived: null,
    interest: null,
    type: null,
    paidToDate: null,
    repaid: null,
    dateAdded: null
};

module.exports = app => {

  app.post('/auth/portfolio', async (req, res, done) => {
    console.log('post route hit')
    console.log(req.body.provider)
    portData.provider = req.body.provider
    console.log(portData.provider);
    res.redirect('/dashboard');
  })
};

/*if (req.body.amount) {
  console.log(req.body.amount);
  portData.amount = req.body.amount
}
if (req.body.dateReceived = req.body.dateReceived) {
  console.log(req.body.dateReceived);
  portData.dateReceived = req.body.dateReceived
}
if (req.body.interest) {
  console.log(req.body.interest);
  portData.interest = req.body.interest
}

if (req.session._id) {
  console.log(req.session._id)
  const user = User.findById(req.session._id)
  if (user) {
    
  }


  
}*/
