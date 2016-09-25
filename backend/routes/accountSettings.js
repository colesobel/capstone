var express = require('express');
var router = express.Router();
let AccountSettings = require('../models/accountSettings')

router.post('/getExpenseCategories', function(req, res, next) {
    console.log(req.body) 
    AccountSettings.getExpenseCategories(req.body.user_id).then(categories => res.json(categories.rows))
});


router.post('/addExpenseCategories', function(req, res, next) {
    console.log(req.body) 
    AccountSettings.addExpenseCategory(req.body.user_id, req.body.category).then(() => res.json('success'))
})


router.post('/deleteExpenseCategories', function(req, res, next) {
    AccountSettings.deleteExpenseCategory(req.body.user_id, req.body.category).then(() => res.json('success'))
})


router.post('/addFixedExpenses', function(req, res, next) {
    console.log(req.body)
    AccountSettings.addFixedExpenses(req.body).then(() => res.json('success'))
})

router.post('/getFixedExpenses', function(req, res, next) {
    AccountSettings.getFixedExpenses(req.body.user_id).then((fixedExpenses) => res.json(fixedExpenses.rows))
})


router.post('/enterIncome', function(req, res, next) {
    AccountSettings.enterIncome(req.body).then(() => res.json('sucess'))
})








module.exports = router;