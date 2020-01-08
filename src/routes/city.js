const express = require("express");
const connection = require("../config");
const router = express.Router({ mergeParams: true });

// All cities
router.get("/", (req, res) => {
  connection.query("SELECT * from city", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieve cities");
    } else {
      res.json(results);
    }
  });
});

// Create a new city
router.post("/new", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO city SET ?", formData, (err) => {
    if (err) {
      res.status(500).send("Error create new city");
    } else {
      res.sendStatus(200);
    }
  });
});

// Modify city
router.put("/:id", (req, res) => {
  const idUrl = req.params.id;
  const formData = req.body;

  connection.query("UPDATE city SET ? WHERE idcity = ?", [ formData, idUrl ], (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(200);
    }
  });
});

// Route to Delete ONE city
router.delete('/:id', (req, res) => {
  const idUrl = req.params.id;
  connection.query('DELETE FROM city WHERE idcity = ?', [idUrl], (err) => {
    if (err) {
      res.status(500).send('Error deleting');
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
