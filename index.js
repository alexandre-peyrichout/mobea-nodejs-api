const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const api = require("./src/routes");

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

  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
});

const bodyParser = require("body-parser");

const cors = require("cors")

// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());


app.use("/api", api);

// Dans index.js ajouter config CORS

app.listen(PORT, err => {

  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`Server is listening on ${PORT}`);
});
