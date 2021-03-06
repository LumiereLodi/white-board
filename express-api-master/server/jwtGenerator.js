const jwt = require('jsonwebtoken')
require("dotenv").config()

function jwtGenerator (email){
    const payload = {
        user : email
    }

    return jwt.sign(payload, process.env.jwtSecret,{expiresIn: "7d"})
}

module.exports = jwtGenerator;