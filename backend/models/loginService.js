let knex = require('../db/knex')
let bcrypt = require('bcrypt')

let loginService = {
    checkForExistingUsername: username => {
        return new Promise((resolve, reject) => {
            return knex.raw(`select * from users where username = '${username}'`).then(user => {
                console.log(user.rows.length)
                if (user.rows.length > 0) {
                    resolve(true)
                } else {
                    resolve(false)
                }
            })
        })
    },
    encryptPassword: password => {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, 10, function(err, hash) {  
                resolve(hash)
            })
        })
    }
}

module.exports = loginService