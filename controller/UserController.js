connection = require("../models/db");
con = connection.Create_Connection

bodyParser = require('body-parser')
urlencodedParser = bodyParser.urlencoded({ extended: false })

user_info = (req,res) =>{
        queryString = "SELECT * FROM user" 
        con.query(queryString,function (err, result, fields) {
          if (err) throw err
          else res.send(result)
        })

}
user_get_by_id = (req,res) =>{
  id = req.params.id
  query = `SELECT * FROM user where id = ${id}`
  con.query(query,function (err, result, fields) {
    if (err) throw err
    else res.send(result)
  });
}
user_delete = (req,res) =>{
  id = req.params.id
  con.query("DELETE from user where id = ?", [id],function (err, result, fields) {
    if (err) throw err
    else res.send(`id : ${id} Deleted Success!`)
  })
}
user_post =(req, res) => {

    var reqBody = req.body
  
    id = reqBody.id;
    name = JSON.stringify(reqBody.name);
    gender = JSON.stringify(reqBody.gender);
    age = reqBody.age;
    queryString = `INSERT INTO user (id,name, gender , age ) VALUES (${id}, ${name}, ${gender},${age})`;
    responseString = `${name} successfully added`

    con.query(queryString ,function (err, result, fields) {
      if (err) throw err
      else res.send(responseString)
    })
}

user_put = (req, res) => {
    id = req.params.id
    var reqBody = req.body
    name = JSON.stringify(reqBody.name);
    gender = JSON.stringify(reqBody.gender);
    age = reqBody.age;

    queryString = `UPDATE user SET name = ${name}, gender = ${gender} , age = ${age} WHERE id = ${id}`
    responseString = `${name} successfully Updated`

    con.query(queryString ,function (err, result, fields) {
      if (err) throw err
      else res.send(responseString)
    })  
}
module.exports = {
    user_info,
    user_delete,
    user_get_by_id,
    user_post,
    user_put
}