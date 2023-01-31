const paymentsController = require('../controller/paymentsController');

bodyParser = require('body-parser')
urlencodedParser = bodyParser.urlencoded({ extended: false })
// Importing Express modules
const express = require('express');
const routerPayments = express.Router();

routerPayments.route('')
            .post(paymentsController.payBill)

module.exports = {
    routerPayments
}