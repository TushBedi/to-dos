const express = require('express');
const router = express.Router();

const loginController = require("../controllers/loginController");
const authentication = require("../middlewares/authentication");

/* GET home page. */
router.get('/', function(req, res) {
  res.status(200).send("Homepage")
});

// login/signup routes
router.post('/signup', loginController.signUp)
router.post('/login', authentication, loginController.logIn)
router.post('/login-fb', loginController.fbLogin)

module.exports = router;
