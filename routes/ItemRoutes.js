const ItemController = require('../controller/ItemController');
const {authenticateToken} = require('../UserAuth/authenticateToken')
//Necassary Modules
bodyParser = require('body-parser')
urlencodedParser = bodyParser.urlencoded({ extended: false })
// Importing Express modules
const express = require('express');
const routerItem = express.Router();

// router.get('/home',(req, res) => {

//All Names
routerItem.route('')
          .get(authenticateToken,ItemController.item_info)
          .post(authenticateToken,urlencodedParser ,ItemController.item_post)
//Specific Names
routerItem.route('/:id')
          .get(authenticateToken,ItemController.item_get_by_id)
          .delete(authenticateToken,ItemController.item_delete)
          .put(authenticateToken,urlencodedParser ,ItemController.item_put)

module.exports = {
    routerItem
}