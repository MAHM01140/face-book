const express = require('express')
const router = express.Router();
const controllers = require("../controller/controllers")


const { body } = require('express-validator');

router.route("/users")
  .get(controllers.getAllUsers)
  /*.post(
    [
    body("email")
    .notEmpty()
    .withMessage('email is required'),
    body("pass")
    .notEmpty()
    .withMessage("password is required")
    ]
    ,controllers.addUser)*/
    
    
module.exports = router