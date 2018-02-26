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

const accounts = db.collection('accounts');

//Login validation
