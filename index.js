const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const connection = require("./src/config");
const api = require("./src/routes");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");

  next();
});

app.use("/api", api);

// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Dans index.js ajouter config CORS

app.listen(PORT, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`Server is listening on ${PORT}`);
});
