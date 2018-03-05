const passport = require('passport');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const recoveryEmail = require('../models/Email');
const stateList = require('../models/States');
const requireLogin = require('../middlewares/requireLogin');

const User = mongoose.model('users');

module.exports = app => {

  //Attempt automatic login via cookies

  //Google OAuth flow
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email', 'firstName', 'lastName']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/dashboard');
    }
  );

//Logout handling. Shoutsout passport.
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  //Really only for testing. Logs current user.
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });

//Routing for local auth.

  //Post route for updating user info.
  app.post('/auth/signup', async (req, res, next) => {
    console.log('route hit.')
    if (req.body.password !== req.body.passwordConf) {
      const err = new Error('Passwords do not match.');
      err.status = 400;
      res.send({ message: "Passwords do not match!"});
      return next(err);
    }

    if (req.body.firstName && req.body.lastName && req.body.state &&
    req.body.email && req.body.password && req.body.username &&
    req.body.passwordConf) {

      const userData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        state: req.body.state,
        email: req.body.email,
        password: req.body.password,
        passwordConf: req.body.passwordConf,
        username: req.body.username
      }

      console.log('Success!' + userData);

    User.create(userData, (error, user) => {
      if (error) {
        if (error.name === 'MongoError' && error.code === 11000) {
          return res.status(500).send({ succes: false, message: 'Username is already taken!' })
        }
        return next(error)}
      else {
        req.session.userID = user._id;
        return res.redirect('/dashboard');
      }
    });
  } else {
    var err = new Error('Please enter info in to all required fields.');
    err.status = 400;
    return next(err);
  }
})

  //GET route post-registration
  app.get('/dashboard', requireLogin, (req, res, next) => {
    User.findById(req.session.userId)
      .exec(function(error, user) {
        if (error) return next(error);
        else return res.join({ name: user.firstName, email: user.email });
      });
    });

//Local Login

  //Attempt login with session ID

  app.get('/', async (res, req, done) => {
    const user = await User.findById(req.session._id)
    if (user) return done(null, user);
  })

//Manual login route

  app.get('/auth/login', async (req, res, done) => {
    const user = await User.findOne({user: req.body.username});
    if (!user) return res.status(400).send("Invalid username or password");
    else {
      res.redirect('/dashboard');
      return done(null, user);
    }
  });

}