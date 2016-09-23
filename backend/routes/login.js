var express = require('express');
var router = express.Router();
let Login = require('../models/login')

router.post('/login', function(req, res, next) {
    console.log(req.body)
    res.json('login')
});

router.post('/signup', function(req, res, next) {
    Login.signup(req.body).then(() => res.json('signup success'))
});

module.exports = router;
