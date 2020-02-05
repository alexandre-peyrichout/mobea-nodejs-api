const express = require("express");

const dotenv = require("dotenv");

dotenv.config();

const bodyParser = require("body-parser");

const api = require("./src/routes");

const PORT = process.env.DATA_PORT || 3000;

const app = express();

const cors = require("cors")

// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// pour plaire au corse
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type,**Authorization**");

  next();
});

app.use("/api", api);

app.listen(PORT, (err) => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`Server is listening on ${PORT}`);
});
