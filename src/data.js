const fs = require('fs')
const path = require('path')

const accountData = fs.readFileSync(`${path.join(__dirname, 'json')}/accounts.json`, { encoding: 'UTF8'})
const accounts = JSON.parse(accountData)

const userData = fs.readFileSync(path.join(__dirname, 'json/users.json'), { encoding: 'UTF8'})
const users = JSON.parse(userData)

let writeJSON = () => {
    const accountsJSON = JSON.stringify(accounts, null, 4)
    fs.writeFileSync(path.join(__dirname,'json/accounts.json'), accountsJSON, 'UTF8')
}

module.exports = { accounts, users, writeJSON }