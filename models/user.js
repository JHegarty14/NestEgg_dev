const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
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
    sparse: true,
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
  },
  failedLogins: {
    type: Number,
    default: 0
  }
});

userSchema.statics.authenticate = (username, password, callback) => {
  User.findOne({ username: username })
    .exec( (err, user) => {
      if (err) return callback(err);
      else if (!user) {
        var err = new Error('Incorrect username or password.');
        err.status = 401;
        return callback(err);
      }

    bcrypt.compare(password, user.password, (err, result) => {
      if (result === true) {
        user.failedLogins = 0;
        return callback(null, user);
      }
      else {
        var err = new Error('Incorrect username or password.');
        user.failedLogins++;
        err.status = 401;
        return callback(err);
      }
    })
  })
}

userSchema.pre('save', function (next) {
  const user = this;
  bcrypt.hash(user.password, 12, function (err, hash) {
    if (err) return next(err);

    user.password = hash;
    user.passwordConf = hash;
    next();
  })
})

var User = mongoose.model('users', userSchema);
module.exports = User;