var express = require('express');
var router = express.Router();
let Login = require('../models/login')

router.post('/login', function(req, res, next) {
    Login.login(req.body).then(data => res.json(data))
});

router.post('/signup', function(req, res, next) {
    Login.signup(req.body).then((userId) => {
        return userId ? res.json(userId.rows[0].id) : res.json(userId)
    }).catch(e => console.log(e))
});

module.exports = router;
