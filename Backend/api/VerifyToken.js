const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = function (req, res, next) {
    const token = req.header('auth-token');
    if (!token) {
        res.json({
            status: "Fallo",
            message: "Acceso Denegado"
        })
    } else {
        try {
            const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
            req.user = verified;
            next();
        } catch (err) {
            res.json({
                status: "Fallo",
                message: "Web token invalido"
            })
        }
    }

}
