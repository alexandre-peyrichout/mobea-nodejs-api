const express = require("express");
const connection = require("../config");

const router = express.Router({ mergeParams: true });

// ALL destinations
router.get("/", (req, res) => {
  connection.query("SELECT * from destination", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving destination");
    } else {
      res.json(results);
    }
  });
});

// ALL destinations fromm one user
router.get("/last/:id", (req, res) => {
  const user = req.body;
  connection.query(
    "SELECT * from destination WHERE user_iduser = ? ORDER BY DESC LIMIT 1",
    user,
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving destination");
      } else {
        res.json(results);
      }
    }
  );
});

// // Create a new destination
router.post("/new", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO destination SET ?", formData, (err, result) => {
    if (err) {
      res.status(500).send("Error create a new destination");
    } else {
      res.sendStatus(200).json(result);
    }
  });
});

// Route to modify ONE destination
router.put("/:id", (req, res) => {
  const idUrl = req.params.id;
  const formData = req.body;

  connection.query(
    "UPDATE destination SET ? WHERE iddestination = ?",
    [formData, idUrl],
    (err, results) => {
      if (err) {
        res.status(500).send("Error modify destination");
      } else {
        res.json(results);
      }
    }
  );
});

// Delete a destination
router.delete("/:id", (req, res) => {
  const idUrl = req.params.id;
  connection.query(
    "DELETE FROM destination WHERE iddestination = ?",
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
