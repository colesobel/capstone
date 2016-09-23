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
                return new Promise((resolve, reject) => {
                    resolve('username already exists')
                })
            }
        })
    },
    login: function(userInfo) {
        return knex.raw(`select * from users where username = '${userInfo.username}'`).then(user => {
            if (user.rows.length > 0) {

            }
        })
        return new Promise((resolve, reject) => {
            bcrypt.compare(hashedPass, hash, function(err, res) {
            });
        })
    }
}

module.exports = login