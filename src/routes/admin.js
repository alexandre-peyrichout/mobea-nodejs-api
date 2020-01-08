const express = require("express");
const connection = require("../config");
const router = express.Router({ mergeParams: true });

// ALL admin
router.get('/', (req,res) => {
  connection.query('SELECT * from admin', (err, results) => {
    if (err) {
      res.status(500).send('Error retrieving all admin');
    } else {
      res.json(results);
    }
  });
});

// Create a new admin
router.post('/new', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO admin SET ?', formData, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(200);
    }
  });
});

// Modify admin
router.put('/:id', (req, res) => {
  const idUrl = req.params.id;
  const formData = req.body;

  connection.query(
    'UPDATE admin SET ? WHERE idadmin = ?',
    [formData, idUrl],
    (err) => {
      if (err) {
        res.status(500).send('Error modify admin');
      } else {
        res.sendStatus(200);
      }
    },
  );
});

// delete a admin
router.delete('/:id', (req, res) => {
  const idUrl = req.params.id;
  connection.query('DELETE FROM admin WHERE idadmin = ?', [idUrl], (err) => {
    if (err) {
      res.status(500).send('Error deleting');
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
