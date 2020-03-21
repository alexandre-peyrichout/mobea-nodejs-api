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
router.get("/last", (req, res) => {
  const user = req.query.id;
  connection.query(
    "SELECT iddestination from destination WHERE user_iduser = ? ORDER BY iddestination DESC LIMIT 1",
    user,
    (err, lastDest) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(lastDest);
      }
    }
  );
});

// // Create a new destination
router.post("/new", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO destination SET ?", formData, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(200);
    }
  });
});

// Route to modify ONE destination
router.put("/:id", (req, res) => {
  const idUrl = req.params.id;
  const formData = req.body;

  connection.query("UPDATE destination SET ? WHERE iddestination = ?", [formData, idUrl], (err, results) => {
    if (err) {
      res.status(500).send("Error modify destination");
    } else {
      res.json(results);
    }
  });
});

// Delete a destination
router.delete("/:id", (req, res) => {
  const idUrl = req.params.id;
  connection.query("DELETE FROM destination WHERE iddestination = ?", [idUrl], (err) => {
    if (err) {
      res.status(500).send("Error deleting");
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
