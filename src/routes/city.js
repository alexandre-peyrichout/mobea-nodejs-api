const express = require("express");
const connection = require("../config");
const router = express.Router({ mergeParams: true });

// Route to select ALL users
router.get("/", (req, res) => {
  connection.query("SELECT * from city", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

router.post("/new", (req, res) => {
  const formData = req.body;
  connection.query("INSERT INTO city SET ?", formData, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(200);
    }
  });
});

// router.put("/:id", (req, res) => {
//   const idUrl = req.params.id;
//   const formData = req.body;

//   connection.query(
//     "UPDATE table SET ? WHERE id = ?",
//     [formData, idUrl],
//     err => {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         res.sendStatus(200);
//       }
//     }
//   );
// });

module.exports = router;
