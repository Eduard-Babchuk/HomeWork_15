const { expect } = require('chai')
const { password, hash, checkPasswordRequirements, hashPassword, compareWithHash } = require('./HomeWork.js')

describe('function to validate password', function() {
    it('Password have be length 8 and more, upper nad lower register, special simbols', function() {
        const result = checkPasswordRequirements(password)
        expect(result).to.eq(true)
    })

    it('Function for hashing password', async function(){
        const res = hashPassword(password)
        expect(res.slice(0, 2).to.eq('$2b'))
    })

    it('Matches function for password and hashing password', async function(){
        const resultation = compareWithHash(hash, password)
        expect(resultation).to.eq(true)
    })
})

