var mysql = require("mysql");
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "example-app",
  dateStrings: "date",
});
db.connect();

module.exports = db;
