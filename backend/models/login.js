let knex = require('../db/knex')
let bcrypt = require('bcrypt')
let loginService = require('./loginService')

let login = {
    signup: function (userInfo) {
        return loginService.checkForExistingUsername(userInfo.username).then(exists => {
            if (!exists) {
                return loginService.encryptPassword(userInfo.password).then(hashedPass => {
                    return knex.raw(`insert into users values (default, '${userInfo.firstName}', '${userInfo.lastName}', '${userInfo.username}', '${hashedPass}')`).then(() => {
                        return knex.raw(`select id from users where username = '${userInfo.username}'`)
                    })
                })
            } else {
                return new Promise((resolve, reject) => {resolve(false)})
            }
        })
    },
    login: function(userInfo) {
        return loginService.gethashedPassword(userInfo.username, userInfo.password)
    },
    addDefaultExpenseCategories: user_id => {
        return new Promise((resolve, reject) => {
            let expenseCategories = ['groceries', 'rent', 'car', 'utilities', 'restaurants', 'household items', 'entertainment', 'fun', 'clothing', 'nightlife']
            let databaseArray = []
            expenseCategories.forEach(exp => {
                databaseArray.push(knex.raw(`insert into expense_categories values (default, ${user_id}, '${exp}')`))
            })
            Promise.all(databaseArray).then(() => {
                resolve()
            })
        })
    }
}

module.exports = login