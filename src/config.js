const mysql = require("mysql");

const dotenv = require("dotenv");

dotenv.config();

const connection = mysql.createConnection({
  host:"eu-cdbr-west-02.cleardb.net",
  user: "bda365288edd60",
  password: "5a65d830",
  database: "heroku_413d8abfe34321f"
});
module.exports = connection;
