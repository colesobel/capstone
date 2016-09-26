let knex = require('../db/knex')

let dailyExpensesService = {
    createUploadExpensesArray: userInfo => {
        let finalArray = []
        for (exp in userInfo.expenseObj) {
            finalArray.push(
                knex.raw(`insert into daily_expenses values (default, ${userInfo.user_id}, '${userInfo.expenseObj[exp].expenseCategory}', ${userInfo.expenseObj[exp].amount}, '${userInfo.expenseObj[exp].day}', '${userInfo.expenseObj[exp].month}', ${userInfo.expenseObj[exp].year}, '${userInfo.expenseObj[exp].fullDate}', ${userInfo.expenseObj[exp].unixTimestamp})`)
            )
        }
        return finalArray
    }
}

module.exports = dailyExpensesService