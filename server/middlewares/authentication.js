const bcrypt = require("bcrypt")
const { user } = require("../models")

module.exports = function (req, res, next) {
    let email = req.body.email
    let password = req.body.password
    user
        .findOne({ email })
        .then( user => {
            if (user) {
                let isPasswordTrue = bcrypt.compareSync(password, user.password);
                if (isPasswordTrue) {
                    req.body.userId = user._id
                    req.body.name = user.name
                    next();
                }
                else {
                    res.json({
                        err: { message: "email / password is incorrect"}
                    });
                }
            }
            else {
                res.json({
                    err: {message: "email / password is incorrect"}
                });
            }
        })
        .catch (err => {
            if (err) {
                res.status(400).json({ err });
            }
        });
};