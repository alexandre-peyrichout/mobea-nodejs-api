const express = require("express");
const connection = require("../config");
const router = express.Router({ mergeParams: true });

// All country
router.get("/", (req, res) => {
  connection.query("SELECT * from country", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieve country");
    } else {
      res.json(results);
    }
  });
});

// Create a new country
router.post("/new", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO country SET ?", formData, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(200);
    }
  });
});

// Modify a country
router.put("/:id", (req, res) => {
  const idUrl = req.params.id;
  const formData = req.body;

  connection.query(
    "UPDATE country SET ? WHERE idcountry = ?",
    [formData, idUrl],
    err => {
      if (err) {
        res.status(500).send("Error modify country");
      } else {
        res.sendStatus(200);
      }
    },
  );
});

// Delete ONE country
router.delete('/:id', (req, res) => {
  const idUrl = req.params.id;
  connection.query('DELETE FROM country WHERE idcountry = ?', [idUrl], (err) => {
    if (err) {
      res.status(500).send('Error deleting');
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
