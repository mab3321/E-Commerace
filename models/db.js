var mysql = require('mysql');

var Create_Connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "e-com"
});

module.exports = {
    Create_Connection
}

