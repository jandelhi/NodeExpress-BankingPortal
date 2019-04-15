const express = require('express')
const router = express.Router()

const { accounts, writeJSON } = require('../data')


router.get('/transfer', (req, res) => {
    res.render('transfer')
})

router.post('/transfer', (req, res) => {
    let {from, to, amount} = req.body
    accounts[from].balance = accounts[from].balance - amount
    accounts[to].balance = accounts[to].balance + parseInt(amount,10)
    writeJSON()
    res.render('transfer', { message: "Transfer Completed" })
})

router.get('/payment', (req, res) => {
    res.render('payment', { account: accounts.credit })
})

router.post('/payment', (req, res) => {
    let {amount} = req.body
    let {balance, available} = accounts.credit
    accounts.credit.balance = balance - amount
    accounts.credit.available = parseInt(available, 10) + parseInt(amount, 10)
    writeJSON()
    res.render('payment', {
        message: "Payment Successful",
        account: accounts.credit
    })
})

module.exports = router