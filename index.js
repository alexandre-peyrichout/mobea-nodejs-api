const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const connection = require("./src/config");
const api = require("./src/routes");

app.use("/api", api);

// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Dans index.js ajouter config CORS
app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  req.header("Access-Control-Allow-Origin", "*");
  req.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  req.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.listen(PORT, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`Server is listening on ${PORT}`);
});
