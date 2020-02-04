const express = require("express");
const connection = require("../config");

const router = express.Router({ mergeParams: true });

// All task
// router.get("/", (req, res) => {
//   connection.query("SELECT * from task", (err, results) => {
//     if (err) {
//       res.status(500).send("Error retrieve situation");
//     } else {
//       res.json(results);
//     }
//   });
// });

router.get("/", (req, res) => {
  connection.query(
    "SELECT t.*, ty.name AS categorie FROM task t JOIN task_type ty ON t.task_type_idtask_type = ty.idtask_type",
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieve situation");
      } else {
        res.json(results);
      }
    }
  );
});

// Create a new situation
router.post("/new", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO task SET ?", formData, err => {
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
  console.log(formData);
  connection.query(
    "UPDATE task SET ? WHERE idtask = ?",
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
router.delete("/:id", (req, res) => {
  const idUrl = req.params.id;
  connection.query("DELETE FROM task WHERE idtask = ?", [idUrl], err => {
    if (err) {
      res.status(500).send("Error deleting");
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
