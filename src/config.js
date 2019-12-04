const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "test",
  password: "Password95#",
  database: "ouiexpat"
});
module.exports = connection;
