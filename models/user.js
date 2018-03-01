const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  googleID: {
    type: String,
    unique: true,
    required: false
  },
  passwordConf: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  income: {
    type: Number,
    required: false
  }
});

userSchema.statics.authenticate = function (username, password, callback) {
  User.findOne({ username: username })
    .exec(function (err, user) {
      if (err) return callback(err);
      else if (!user) {
        var err = new Error('Incorrect username or password.');
        err.status = 401;
        return callback(err);
      }

    bcrypt.compare(password, user.password, function (err, result) {
      if (result === true) return callback(null, user);
      else {
        var err = new Error('Incorrect username or password.')
        err.status = 401;
        return callback(err);
      }
    })
  })
}

userSchema.pre('save', function(next) {
  var user = this;
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) return next(err);

    user.password = hash;
    next();
  }),

  bcrypt.hash(user.passwordConf, 10, function(err, hash) {
    if (err) return next(err);

    user.passwordConf = hash;
    next();
  })
})

var User = mongoose.model('users', userSchema);
module.exports = User;
