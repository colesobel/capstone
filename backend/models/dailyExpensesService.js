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
    },

    gaugeQuery: user_id => {
        return new Promise((resolve, reject) => {
            knex.raw(`select distinct ec.user_id, 
            ec.expense_category, 
            ec.percentage as desired_spend_percentage, 
            coalesce(round(sum(de.expense_amount) / (select sum(expense_amount) from daily_expenses where user_id = 6 and month = 'September')::float * 100), 0) as spend_percentage, 
            round(ec.percentage / 100::float * (select sum(expense_amount) from daily_expenses where user_id = 6 and month = 'September')) as desired_spend_total,
            coalesce(sum(de.expense_amount), 0) as spend_total, 
            ec.percentage * 2 as gauge_max
            from expense_categories ec
            left join (select * from daily_expenses where user_id = 6 and month = 'September') de on ec.user_id = de.user_id and ec.expense_category = de.expense_category
            where ec.user_id = 6
            group by ec.user_id, ec.expense_category, ec.percentage`).then(gaugeStats => resolve(gaugeStats.rows))
        })
    }
}

module.exports = dailyExpensesService