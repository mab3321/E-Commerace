const express = require('express');
const UserRegistration = require('../controller/UserRegistratoinController')
const routerUserRegistration = express.Router();

routerUserRegistration.route('/login')
                                .post(UserRegistration.UserLogin)

routerUserRegistration.route('/signup')
                                .post(UserRegistration.UserSignUp)

routerUserRegistration.route('/changepassword')
                                .put(UserRegistration.UserChangePassword)
module.exports = {routerUserRegistration}