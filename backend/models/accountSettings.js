let knex = require('../db/knex')
let AccountSettingsService = require('./accountSettingsService')

let accountSettings = {
    getExpenseCategories: user_id => {
        return knex.raw(`select id, expense_category from expense_categories where user_id = ${user_id}`)
    },
    
    addExpenseCategory: (user_id, category) => {
        return knex.raw(`insert into expense_categories values (default, ${user_id}, '${category}')`)
    },

    deleteExpenseCategory: (user_id, catId) => {
        return knex.raw(`delete from expense_categories where user_id = ${user_id} and id = ${catId}`)
    },

    addFixedExpenses: (userInfo) => {
        return new Promise((resolve, reject) => {
            let expenseUploads = AccountSettingsService.createFixedExpenseArray(userInfo)
            Promise.all(expenseUploads).then(() => resolve())
        })
    },

    getFixedExpenses: (user_id) => {
        return knex.raw(`select expense_category, expense_amount from fixed_expenses where user_id = ${user_id}`)
    }

}

module.exports = accountSettings