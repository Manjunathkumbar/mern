var express = require('express');
var router = express.Router();
const {signout,signup} = require("../controllers/auth")
const { check, validationResult } = require('express-validator');



router.get("/signout",signout);
router.post("/signup", [
    check('name', "name should be atleast 3 char").isLength({ min: 3 }),
    check('email', "email is required").isEmail(),
    check('password', "password should be atleast 3 character").isLength({ min: 3 })
], signup);


module.exports = router;