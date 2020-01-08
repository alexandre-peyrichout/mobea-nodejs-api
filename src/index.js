const express = require('express');

const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const api = require("./routes")

// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// pour plaire au corse
app.use("/api", api)

// ----- TABLE: USER

// Route to select ALL users

app.listen(port, (err) => {
  if (err) {
    throw new Error('There is an error');
  }
  console.log('listening');
});
