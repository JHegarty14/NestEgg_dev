module.exports = (req, res, err) => {
    if (req.body.source && req.body.total && req.body.rate && req.body.type) {

        var loanData = {
            Source: req.body.source,
            Total: req.body.total,
            Interest: req.body.rate,
            Type: req.body.type,
            repaid: req.body.repaid
        }

        Portfolio.Create(loandata, function(err, portfolio) {
            if (err) return next(err)

            else return res.redirect('/dashboard');
        })
    }
}