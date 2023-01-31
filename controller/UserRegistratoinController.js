connection = require("../models/db");
con = connection.Create_Connection

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

UserLogin = async (req,res) =>{

    const username = req.body.username
    const password = req.body.password
    const credential = {
                        username: username,
                        password: password
                        }

    queryString = `SELECT * FROM user_registration WHERE username = "${username}";`
    con.query(queryString,function (err, result, fields) {
          if (err) throw err
          if (result.length === 0) {
            res.send('UserName does not Exist.')
          }
          else {
            if(bcrypt.compare(credential.password,result[0].password))
            {
                const ACCESS_TOKEN = jwt.sign(credential,process.env.ACCESS_TOKEN_SECRET)
                res.json({ACCESS_TOKEN: ACCESS_TOKEN})
            }
            else
            {
                res.send('Password Incorrect')
            }
          }
        })


}

UserSignUp = async (req,res) =>{
    var reqBody = req.body

    id = "NULL";
    name = JSON.stringify(reqBody.name)
    username = JSON.stringify(reqBody.username)
    email = JSON.stringify(reqBody.email)
    password = JSON.stringify(reqBody.password)

    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password,salt)

    queryString = `INSERT INTO user_registration (id,name, username , email , password ) VALUES (${id}, ${name}, ${username},${email}, ${JSON.stringify(hashedPassword)})`;

    responseString = `${email} successfully added`

    con.query(queryString ,function (err, result, fields) {
      if (err) res.send(err.sqlMessage)
      else res.send(responseString)
    })
}
UserChangePassword = (req,res) =>{
    var reqBody = req.body

    email = JSON.stringify(reqBody.email)
    password = JSON.stringify(reqBody.password)

    queryString = `UPDATE user_registration SET password = ${password} WHERE email = ${email}`;

    responseString = `Password successfully Updated.`

    con.query(queryString ,function (err, result, fields) {
      if (err) res.send(err.sqlMessage)
      else res.send(responseString)
    })
}

module.exports = {
                UserLogin,
                UserSignUp,
                UserChangePassword
            }