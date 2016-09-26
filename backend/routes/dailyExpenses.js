var express = require('express');
var router = express.Router();
let dailyExpenses = require('../models/dailyExpenses')

router.post('/addExpense', function(req, res, next) {
    dailyExpenses.addExpense(req.body).then(() => res.json('add expense hit'))
});

module.exports = router;