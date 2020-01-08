const express = require("express");
const connection = require("../config");
const router = express.Router({ mergeParams: true });

// All situation
router.get("/", (req, res) => {
  connection.query("SELECT * from situation", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieve situation");
    } else {
      res.json(results);
    }
  });
});

// Create a new situation
router.post("/new", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO situation SET ?", formData, (err) => {
    if (err) {
      res.status(500).send("Error create a new situation");
    } else {
      res.sendStatus(200);
    }
  });
});

// Modify situation
router.put("/:id", (req, res) => {
  const idUrl = req.params.id;
  const formData = req.body;

  connection.query(
    "UPDATE situation SET ? WHERE idsituation = ?",
    [formData, idUrl],
    err => {
      if (err) {
        res.status(500).send("Error to modify situation");
      } else {
        res.sendStatus(200);
      }
    }
  );
});

// Delete ONE situation
router.delete('/:id', (req, res) => {
  const idUrl = req.params.id;
  connection.query(
    'DELETE FROM situation WHERE idsituation = ?',
    [idUrl],
    (err) => {
      if (err) {
        res.status(500).send('Error deleting');
      } else {
        res.sendStatus(200);
      }
    },
  );
});

module.exports = router;
