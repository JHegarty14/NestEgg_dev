const bcrypt = require('bcrypt');
const MongoDB = require('mongodb');
const Server = require('mongodb').Server;
const moment = require('moment');

//Create DB connection
const dbName = process.env.DB_NAME || 'Nestegg';
const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = process.env.DB_PORT || '8080';

const db = new MongoDB(dbName, new Server(dbHost, dbPort, {auto_reconnect: true}), {w: 1});
db.open(function(e) {
    if (e) return e;
    else {
        if (process.env.NODE_ENV === 'production') {
            db.authenticate(process.env.DB_USER, process.env.DB_PASS, function(e, res) {
                if (e) return e + " mongo :: error: not authenticated";
            });
        }
    }
});

const accounts = mongoose.model('users');

//Login validation
module.exports = AM;

AM.autoLogin = (user, pw, callback) => {
    accounts.findOne({user: user}, (e, o) => {
      if (o) {
        o.pass == pass ? callback(o) : callback(null);
      } else {
        callback(null);
      }
    })
  }

AM.manualLogin = (user, pass, callback) => {
    accounts.findOne({user: user}, (e, o) => {
        if (!o) callback('user-not-found');
        else {
            validatePassword(pass, o.pass, (err, res) => {
                if (res) callback(null, o);
                else callback('invalid-password');
            });
        }
    });
}

//Add, update, and delete user records
AM.addNewAccount = (newData, callback) => {
    accounts.findOne({user: newData.user}, (e, o) => {
        if (o) callback('username-taken');
        else {
            accounts.findOne({email: newData.email}, (e, o) => {
                if (o) callback('email-taken');
                else if (o.pass !== o.passConf) {
                    callback('passwords-do-not-match');
                } else {
                    bcrypt.hash(newData.pass, 12, (err, hash) => {
                        if (err) return err;

                        o.pass = hash
                        o.passConf = hash
                        accounts.insert(newData, {safe: true}, callback);
                    });
                }
            })
        }
    })
}

/*AM.updateAccount = (newData, callback) => {
    accounts.findOne({_id: getObjectId(newData.id)}, (e, o) => {
        o.name   = newData.name;
        o.email  = newData.email;
        o.state  = newData.state;

        if (newData.pass == '')
    }
} */