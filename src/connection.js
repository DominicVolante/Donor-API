const mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "wiki",
  multipleStatements: true,
});

db.connect((err) => {
  if (!err) {
    console.log("connected");
  } else {
    console.log(err);
  }
});

module.exports = db;
