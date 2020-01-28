const express = require("express");
const connection = require("../config");

const router = express.Router({ mergeParams: true });

// ALL task_has_destination
router.get("/", (req, res) => {
  connection.query("SELECT * from task_has_destination", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving all taskHasDestination");
    } else {
      res.json(results);
    }
  });
});

// Select one task_has_destination
router.get("/:id", (req, res) => {
  const task_idtask = req.params.id;
  const destination_iddestination = req.params.id;
  connection.query(
    "SELECT * from task_has_destination WHERE task_idtask = ? and destination_iddestination = ?",
    [task_idtask, destination_iddestination],
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving task_has_destination");
      } else {
        res.json(results);
      }
    }
  );
});

// Create a new task_has_destination
router.post("/new", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO task_has_destination SET ?", formData, err => {
    if (err) {
      res.status(500).send("Error creating a new task_has_destination");
    } else {
      res.sendStatus(200);
    }
  });
});

// Create all tasks when a news destination is created
router.get("/generate/:id", (req, res) => {
  const destination = req.params.id;
  connection.query(
    `INSERT INTO task_has_destination (task_idtask, destination_iddestination, isdone) (SELECT idtask, ${destination}, 0 FROM task)`,
    (error, results) => {
      if (error) {
        res.status(500).send(error);
      } else {
        res.json(results);
      }
    }
  );
});

// Modify a task_has_destination
router.put("/:id/:id2", (req, res) => {
  const idUrl = req.params.id;
  const formData = req.body;
  const idUrl2 = req.params.id2;

  connection.query(
    "UPDATE task_has_destination SET ? WHERE task_idtask = ? and destination_iddestination = ?",
    [formData, idUrl, idUrl2],
    err => {
      if (err) {
        res.status(500).send("Error modifying a task_has_destination");
      } else {
        res.sendStatus(200);
      }
    }
  );
});

// Delete ONE task_has_destination
router.delete("/:id/:id2", (req, res) => {
  const idUrl = req.params.id;
  const idUrl2 = req.params.id2;

  connection.query(
    "DELETE FROM task_has_destination WHERE task_idtask = ? and destination_iddestination = ?",
    [idUrl, idUrl2],
    err => {
      if (err) {
        res.status(500).send("Error deleting a task_has_destination");
      } else {
        res.sendStatus(200);
      }
    }
  );
});

module.exports = router;
