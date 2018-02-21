const keys = require('../config/keys');

module.exports = {
    'secret' : keys.loginSecretKey,
    'database': keys.mongoURI
}