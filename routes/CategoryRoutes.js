const CategoryController = require('../controller/CategoryController')
const {authenticateToken} = require('../UserAuth/authenticateToken')
//Necassary Modules
bodyParser = require('body-parser')
urlencodedParser = bodyParser.urlencoded({ extended: false })

const express = require('express');

const routerCategory = express.Router();

// router.get('/home',(req, res) => {

//All Names
routerCategory.route('/')
                .get(authenticateToken,CategoryController.category_info)
                .post(authenticateToken,urlencodedParser ,CategoryController.category_post)
//Specific Names
routerCategory.route('/:id')
                .get(authenticateToken,CategoryController.category_get_by_id)
                .delete(authenticateToken,CategoryController.category_delete)
                .put(authenticateToken,urlencodedParser ,CategoryController.category_put)

module.exports = {
    routerCategory
}