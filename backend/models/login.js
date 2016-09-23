let knex = require('../db/knex')
let bcrypt = require('bcrypt')

let login = {
    signup: function (userInfo) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(userInfo.password, 10, function(err, hash) {  
                resolve(hash)
            })
        }).then(hashedPass => {
            console.log(hashedPass)
            return knex.raw(`insert into users values (default, '${userInfo.firstName}', '${userInfo.lastName}', '${userInfo.username}', '${hashedPass}')`)
        })
    }
}

module.exports = login