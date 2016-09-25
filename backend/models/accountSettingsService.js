let knex = require('../db/knex')

let accountSettings = {
    createFixedExpenseArray: fixedExpenses => {
        let finalArray = []
        for (let exp in fixedExpenses.fixed_expenses) {
            finalArray.push(knex.raw(`insert into fixed_expenses values (default, ${fixedExpenses.user_id}, '${fixedExpenses.fixed_expenses[exp].expenseCategory}', ${fixedExpenses.fixed_expenses[exp].amount})`)) 
        }
        return finalArray
    }
}

module.exports = accountSettings