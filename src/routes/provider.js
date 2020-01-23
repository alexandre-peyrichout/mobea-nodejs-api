const express = require("express");
const connection = require("../config");
const router = express.Router({ mergeParams: true });

// All providers
router.get("/", (req, res) => {
  connection.query("SELECT * from provider", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Create a new provider
router.post("/new", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO provider SET ?", formData, err => {
    if (err) {
      res.status(500).send("Error creating new provider");
    } else {
      res.sendStatus(200);
    }
  });
});

// Modify provider
router.put("/:id", (req, res) => {
  const idUrl = req.params.id;
  const formData = req.body;

  connection.query(
    "UPDATE provider SET ? WHERE idprovider = ?",
    [formData, idUrl],
    err => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.sendStatus(200);
      }
    }
  );
});

// Route to Delete ONE provider
router.delete("/:id", (req, res) => {
  const idUrl = req.params.id;
  connection.query(
    "DELETE FROM provider WHERE idprovider = ?",
    [idUrl],
    err => {
      if (err) {
        res.status(500).send("Error deleting");
      } else {
        res.sendStatus(200);
      }
    }
  );
});

module.exports = router;
