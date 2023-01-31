connection = require("../models/db");
con = connection.Create_Connection

item_info = (req,res) =>{
  queryString = "SELECT `items`.`name` AS item_name , `category`.`name` AS category , `items`.`price_per_unit` AS price_per_unit , `items`.`isbn` AS ISBN FROM `items` INNER JOIN `category` ON `items`.`category` = `category`.`id`;"
  con.query(queryString,function (err, result, fields) {
    if (err) throw err
    else res.send(result)
  })
}
item_get_by_id = (req,res) =>{
  id = req.params.id
  con.query("SELECT * FROM items where id = ?", [id],function (err, result, fields) {
    if (err) throw err
    else res.send(result)
  });
}
item_delete = (req,res) =>{
  id = req.params.id
  con.query("DELETE from items where id = ?", [id],function (err, result, fields) {
    if (err) throw err
    else res.send(`id : ${id} Deleted Success!`)
  })
}
item_post =(req, res) => {

  var reqBody = req.body
   id = reqBody.id;
   category = reqBody.category;
   name = JSON.stringify(reqBody.name);
   price_per_unit = reqBody.price_per_unit;
   isbn = JSON.stringify(reqBody.isbn);

   queryString = `INSERT INTO items (id,category,name, price_per_unit , isbn ) VALUES (${id}, ${category},${name}, ${price_per_unit},${isbn})`;
   responseString = `${name} successfully added`

  con.query(queryString ,function (err, result, fields) {
    if (err) throw err
    else res.send(responseString)
    })
}
item_put = (req, res) => {
     id = req.params.id
    var reqBody = req.body
     category = reqBody.category;
     name = JSON.stringify(reqBody.name);
     price_per_unit = reqBody.price_per_unit;
     isbn = JSON.stringify(reqBody.isbn);
  
     queryString = `UPDATE items SET category = ${category} ,name = ${name}, price_per_unit = ${price_per_unit} , isbn = ${isbn} WHERE id = ${id}`
     responseString = `${name} successfully Updated`

    con.query(queryString ,function (err, result, fields) {
      if (err) throw err
      else res.send(responseString)
    })
}
module.exports = {
    item_info,
    item_get_by_id,
    item_delete,
    item_post,
    item_put
}