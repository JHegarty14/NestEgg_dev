const passport = require('passport');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const recoveryEmail = require('../models/Email');
const stateList = require('../models/States');
const requireLogin = require('../middlewares/requireLogin');

const User = mongoose.model('users');
mongoose.Promise = global.Promise;

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
          return res.status(500).send({ success: false, message: 'Username is already taken!' })
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

  //GET route post-registration - tests session
  app.get('/test-dashboard', requireLogin, (req, res, next) => {
    res.send("If you can see this, you're logged in")
    });

//Local Login

  //Attempt login with session ID

  app.get('/', async (res, req, done) => {
    const user = await User.findById(req.session._id)
    if (user) return done(null, user);
  })

//Manual login route

  app.post('/auth/login', async (req, res, done) => {
    console.log('route hit')
    const username = req.body.username
    const password = req.body.password
    console.log(password);
    const user = await User.findOne({ username: username })
    console.log(user)
          if (err) return done(err);
          else if (!user) {
            var err = new Error('Incorrect username or password.');
            err.status = 401;
            return done(err);
          }
    
        bcrypt.compare(password, user.password, function(err, result) {
          if (result === true) {
          //reset failed logins to prevent improper account locking
            user.failedLogins = 0;
          //Set session info
            req.user = user;
            console.log(req.session._id);
            console.log(req.user);
          //Disable caching of restricted pages
            res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
            res.redirect('/dashboard');
            return done(null, user);
          }
          else {
            var err = new Error('Incorrect username or password.');
            user.failedLogins++;
            err.status = 401;
            return done(err);
          }
        })
    });
}