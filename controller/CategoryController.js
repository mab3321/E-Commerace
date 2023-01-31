connection = require("../models/db");
con = connection.Create_Connection

category_info = (req,res) =>{
  con.query("SELECT * FROM category" ,function (err, result, fields) {
    if (err) throw err
    else res.send(result)
  })
}
category_get_by_id = (req,res) =>{
  id = req.params.id

  con.query("SELECT * FROM category where id = ?", [id],function (err, result, fields) {
    if (err) throw err
    else res.send(result)
  });
}
category_delete = (req,res) =>{
    id = req.params.id
    con.query("DELETE from category where id = ?", [id],function (err, result, fields) {
      if (err) throw err
      else res.send(`id : ${id} Deleted Success!`)
    })
}
category_post =(req, res) => {

  var reqBody = req.body
  id = reqBody.id;
  name = JSON.stringify(reqBody.name);
  queryString = `INSERT INTO category (id,name ) VALUES (${id}, ${name})`;
  responseString = `${name} successfully added`

  con.query(queryString ,function (err, result, fields) {
    if (err) throw err
    else res.send(responseString)
  })
}

category_put = (req, res) => {
    id = req.params.id
    var reqBody = req.body
    name = JSON.stringify(reqBody.name);

    queryString = `UPDATE category SET name = ${name} WHERE id = ${id}`
    responseString = `${name} successfully Updated`

    con.query(queryString ,function (err, result, fields) {
      if (err) throw err
      else res.send(responseString)
    })
  }
module.exports = {
    category_info,
    category_delete,
    category_get_by_id,
    category_post,
    category_put
}