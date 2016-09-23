var express = require('express');
var router = express.Router();
let Login = require('../models/login')

router.post('/login', function(req, res, next) {
    console.log(req.body)
    res.json('login')
});

router.post('/signup', function(req, res, next) {
    Login.signup(req.body).then((userId) => {
        // if (typeof userId === 'string') {
        //     res.json(userId)
        // } else
        // res.json(userId.rows[0].id)
        console.log(typeof userId)
        return typeof userId === 'string' ? res.json(userId) : res.json(userId.rows[0].id)
    }).catch(e => console.log(e))
});

module.exports = router;
