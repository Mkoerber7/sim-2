module.exports = function(req, res, next) {
    if (!req.session.user) {
        req.status(403).send('Not Logged In')
    } else {
        next();
    }
}