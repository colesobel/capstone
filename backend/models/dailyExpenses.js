let knex = require('../db/knex')
let DailyExpensesService = require('./dailyExpensesService')

let dailyExpenses = {
    addExpense: userInfo => {
        return new Promise((resolve, reject) => {
            let uploadArray = DailyExpensesService.createUploadExpensesArray(userInfo)
            console.log(uploadArray)
            Promise.all(uploadArray).then(() => resolve()).catch(e => console.log(e))
        })
    },

    getGaugeStats: user_id => {
        return new Promise((resolve, reject) => {
            DailyExpensesService.gaugeQuery(user_id).then(gaugeStats => {
                console.log(gaugeStats)
                resolve(gaugeStats)
            })
        })
    }
}

module.exports = dailyExpenses