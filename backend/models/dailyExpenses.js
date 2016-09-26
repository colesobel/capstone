let knex = require('../db/knex')
let DailyExpensesService = require('./dailyExpensesService')

let dailyExpenses = {
    addExpense: userInfo => {
        return new Promise((resolve, reject) => {
            let uploadArray = DailyExpensesService.createUploadExpensesArray(userInfo)
            console.log(uploadArray)
            Promise.all(uploadArray).then(() => {
                resolve()
            }).catch(e => console.log(e))
        })
    }
}

module.exports = dailyExpenses