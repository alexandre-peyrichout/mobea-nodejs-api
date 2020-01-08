const express = require("express");
const connection = require("../config");
const router = express.Router({ mergeParams: true });

// Route to select ALL users
router.get("/", (req, res) => {
  connection.query("SELECT * from user", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving all users");
    } else {
      res.json(results);
    }
  });
});

// Route to select one user
router.get("/:id", (req, res) => {
  const idUser = req.params.id;
  connection.query("SELECT * from user WHERE iduser = ?", idUser, (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving user");
    } else {
      res.json(results);
    }
  });
});

// Create a new User
router.post("/new", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO user SET ?", formData, (err) => {
    if (err) {
      res.status(500).send("Error create a new User");
    } else {
      res.sendStatus(200);
    }
  });
});

// Modify a user
router.put("/:id", (req, res) => {
  const idUrl = req.params.id;
  const formData = req.body;

  connection.query("UPDATE user SET ? WHERE iduser = ?", [ formData, idUrl ], (err) => {
    if (err) {
      res.status(500).send("Error to modify a User");
    } else {
      res.sendStatus(200);
    }
  });
});

// Delete ONE user
router.delete("/:id", (req, res) => {
  const idUrl = req.params.id;
  connection.query("DELETE FROM user WHERE iduser = ?", [ idUrl ], (err) => {
    if (err) {
      res.status(500).send("Error deleting");
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
