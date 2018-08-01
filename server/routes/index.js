const express = require('express');
const router = express.Router();

const loginController = require("../controllers/loginController");
const authentication = require("../middlewares/authentication");

/* GET home page. */
router.get('/', function(req, res) {
  res.status(200).send("Homepage")
});

// login/signup routes
router.post('/signup', loginController.signup)
router.post('/login', authentication, loginController.signin)
router.post('/login-fb', loginController.fblogin)

module.exports = router;
