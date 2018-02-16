module.exports = (req, res, err) => {
    if (req.body.username && req.body.password &&
    req.body.passwordConf && req.body.email && 
    req.body.state && req.body.firstName && req.body.lastName) {

        var userData = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            passwordConf: req.body.passwordConf,
            state: req.body.state,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }

        User.Create(userData, function (err, user) {
            if (err) {
                return next(err)
            } else {
                return res.redirect('/dashboard');
            }
        })
    }
}