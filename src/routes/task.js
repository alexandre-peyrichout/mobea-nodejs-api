const express = require("express");
const connection = require("../config");
const router = express.Router({ mergeParams: true });

// ALL tasks
router.get('/', (req, res) => {
    connection.query('SELECT * from task', (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving task');
        } else {
            res.json(results);
        }
    });
});

// Create a new task
router.post('/new', (req, res) => {
    const formData = req.body;
    connection.query('INSERT INTO task SET ?', formData, (err) => {
        if (err) {
            res.status(500).send('Error creating a new task');
        } else {
            res.sendStatus(200);
        }
    });
});

// Modify a task
router.put('/:id', (req, res) => {
    const idUrl = req.params.id;
    const formData = req.body;

    connection.query(
        'UPDATE task SET ? WHERE idtask = ?',
        [formData, idUrl],
        (err) => {
            if (err) {
                res.status(500).send('Error modifying task');
            } else {
                res.sendStatus(200);
            }
        },
    );
});

// Delete a task
router.delete('/:id', (req, res) => {
    const idUrl = req.params.id;
    connection.query('DELETE FROM task WHERE idtask = ?', [idUrl], (err) => {
        if (err) {
            res.status(500).send('Error deleting a task');
        } else {
            res.sendStatus(200);
        }
    });
});

module.exports = router;