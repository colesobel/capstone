var express = require('express');
var router = express.Router();
let AccountSettings = require('../models/accountSettings')

/* GET home page. */
router.post('/getExpenseCategories', function(req, res, next) {
    console.log(req.body) 
    AccountSettings.getExpenseCategories(req.body.user_id).then(categories => {
        res.json(categories.rows)
    })
});

module.exports = router;