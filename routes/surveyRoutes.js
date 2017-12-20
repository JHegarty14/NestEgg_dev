const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Mailer = require('../services/Mailer');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.post('/api/surveys', requireLogin, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now()
    });

    const mailer = new Mailer(survey, template);

  });
};
