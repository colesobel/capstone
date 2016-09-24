let knex = require('../db/knex')

let accountSettings = {
    getExpenseCategories: user_id => {
        return knex.raw(`select expense_category from expense_categories where user_id = ${user_id}`)
    }
}

module.exports = accountSettings