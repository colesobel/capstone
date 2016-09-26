var express = require('express');
var router = express.Router();

router.post('/addExpense', function(req, res, next) {
    console.log(req.body)
    res.json('add expense hit')
});

module.exports = router;