// Importing Routes

routerUser = require('./routes/UserRoutes')
routerItem = require('./routes/ItemRoutes')
routerCategory = require('./routes/CategoryRoutes')
const { routerPayments } = require('./routes/paymentsRoutes')
const {routerUserRegistration} = require('./UserAuth/UserRegistration')

// Importing Libraries
require('dotenv').config()
const path = require('path');

express = require('express');
app = express();

bodyParser = require('body-parser')
urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json());

// Handling Payment Methods by Stripe 


// Testing
app.get('/success.html',function(req,res){
    res.sendFile(path.join(__dirname+'/success.html'));
})
  
app.get('/cancel.html',function(req,res){
  res.sendFile(path.join(__dirname+'/cancel.html'));
}
);
app.use('/payments',routerPayments)
// Handling Api

app.use('/registration',routerUserRegistration)
app.use('/user',routerUser.routerUser)
app.use('/items',routerItem.routerItem)
app.use('/category',routerCategory.routerCategory)

// Handling Server
PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>console.log(`Server listening on port ${PORT}`))