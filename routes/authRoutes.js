const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/user');

module.exports = app => {

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

  //Get route
  app.get('/signup', function(req, res, next) {
    return res.sendFile(path.join(_dirname + '/index.html'))
  });

  //Post route for updating user info.
  app.post('/signup', function(req, res, next) {
    //check that passwords match
    var password = req.body.password;
    var username = req.body.username;
    console.log(username, password)
    if (req.body.password !== req.body.passwordConf) {
      const err = new Error('Passwords do not match.');
      err.status = 400;
      res.send("Passwords do not match!");
      return next(err);
    }

    if (req.body.firstName && req.body.lastName && req.body.state &&
    req.body.email && req.body.password && req.body.passwordConf &&
    req.body.password == req.body.passwordConf) {

      const userData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        state: req.body.state,
        email: req.body.email,
        password: req.body.password,
        passwordConf: req.body.passwordConf
      }

    User.create(userData, function(error, user) {
      if (error) return next(error);
      else {
        req.session.userID = user._id;
        return res.redirect('/dashboard');
      }
    });
  } else if (req.body.username && req.body.password) {
    User.authenticate(req.body.username, req.body.password, function(err, user) {
      const fail = 0;
      if (error || !user) {
        fail++;
        const err = new Error('Incorrect username or password.');
        err.status = 401;
        return next(err);
      } else {
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
app.get('/dashboard', function(req, res, next) {
  User.findById(req.session.userId)
    .exec(function(error, user) {
      if (error) return next(error);
      else return res.join({ name: user.firstName, email: user.email });
    });
  });
}