const UserController = require('../controller/UserController');

//Necassary Modules

// For Data Importing Handeling from API
const {authenticateToken} = require('../UserAuth/authenticateToken')
bodyParser = require('body-parser')
urlencodedParser = bodyParser.urlencoded({ extended: false })

const express = require('express');

const routerUser = express.Router();


routerUser.route('/')
            .get(authenticateToken,UserController.user_info)
            .post(authenticateToken,urlencodedParser ,UserController.user_post)
routerUser.route("/:id")
            .get(authenticateToken,UserController.user_get_by_id)
            .delete(authenticateToken,UserController.user_delete)
            .put(authenticateToken,urlencodedParser ,UserController.user_put)

module.exports = {
    routerUser
}