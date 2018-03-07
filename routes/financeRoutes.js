const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
    app.post('/portfolio', requireLogin, (res, req, done) => {
      
    })
};
