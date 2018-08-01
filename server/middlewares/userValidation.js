const jwt = require("jsonwebtoken");
const user  = require("../models/user")

module.exports = function(req, res, next) {
    let token = req.headers.token;
    if (token) {
        let decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.body.userId = decoded.userId;
        
        next();
    }
    else {
        res.json ({
            status: 403,
            messaage: "you aren't logged in"
        });
    }
};