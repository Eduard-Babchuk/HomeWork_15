const bcrypt = require('bcrypt')
const password = "201Well$_$"

function checkPasswordRequirements(password) {
    if (password.length < 8) {
        return false
    }
    
    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
        return false
    }
    
    if (!/\d/.test(password)) {
        return false
    }

    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
        return false
    }
    return true
}

async function hashPassword(password){
    const hashedPass = await bcrypt.hash(password, 10)
    console.log("Your Password: " + password)
    console.log("Hash Password: " + hashedPass)
    compareWithHash(hashedPass, password)
}

async function compareWithHash(hash, password) {
    const match = await bcrypt.compare(password, hash)
    switch(match){
        case true: 
            console.log('\x1b[32m%s\x1b[0m',"Password matches hash")
            break
        default: console.log('\x1b[31m%s\x1b[0m', "Password doesn't matches hash")
    }
}

checkPasswordRequirements(password)
hashPassword(password)

module.exports = {
    password,
    hash,
    checkPasswordRequirements,
    hashPassword,
    compareWithHash
}