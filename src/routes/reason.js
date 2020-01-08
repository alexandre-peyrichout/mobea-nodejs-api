const express = require("express");
const connection = require("../config");
const router = express.Router({ mergeParams: true });


// ALL reasons
router.get('/', (req, res) => {
  connection.query('SELECT * from reason', (err, results) => {
    if (err) {
      res.status(500).send('Error retrieving reason');
    } else {
      res.json(results);
    }
  });
});

// Create a reason
router.post('/new', (req, res) => {
  const formData = req.body;
  connection.query('INSERT INTO reason SET ?', formData, (err) => {
    if (err) {
      res.status(500).send('Error create reason');
    } else {
      res.sendStatus(200);
    }
  });
});

// Modify reason
router.put('/:id', (req, res) => {
  const idUrl = req.params.id;
  const formData = req.body;

  connection.query(
    'UPDATE reason SET ? WHERE idreason = ?',
    [formData, idUrl],
    (err) => {
      if (err) {
        res.status(500).send('Error modify reason');
      } else {
        res.sendStatus(200);
      }
    },
  );
});

// Delete a reason
router.delete('/:id', (req, res) => {
  const idUrl = req.params.id;
  connection.query('DELETE FROM reason WHERE idreason = ?', [idUrl], (err) => {
    if (err) {
      res.status(500).send('Error deleting');
    } else {
      res.sendStatus(200);
    }
  });
});

module.exports = router;
