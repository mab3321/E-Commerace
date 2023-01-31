require('dotenv').config()
connection = require("./models/db");
con = connection.Create_Connection
dataArray = []
getItems = async function (prod_id){
        
    queryString = `SELECT * FROM items WHERE id = ${prod_id}`
    result = await con.query(queryString)
    if (result) {
           console.log(result) //=====> it should contain all rows
           dataArray.push(result);
           // console.log("data "+id+" :", data);
        }
    }
