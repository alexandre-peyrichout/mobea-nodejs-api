const express = require("express");
const connection = require("../config");
const router = express.Router({ mergeParams: true });

// ALL task_type
router.get('/', (req, res) => {
    connection.query('SELECT * from task_type', (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving task');
        } else {
            res.json(results);
        }
    });
});

// Create a new task_type
router.post('/new', (req, res) => {
    const formData = req.body;
    connection.query('INSERT INTO task_type SET ?', formData, (err) => {
        if (err) {
            res.status(500).send('Error creating a new task_type');
        } else {
            res.sendStatus(200);
        }
    });
});

// Modify a task_type
router.put('/:id', (req, res) => {
    const idUrl = req.params.id;
    const formData = req.body;

    connection.query(
        'UPDATE task_type SET ? WHERE idtask_type = ?', [formData, idUrl], (err) => {
            if (err) {
                res.status(500).send('Error modifying task_type');
            } else {
                res.sendStatus(200);
            }
        },
    );
});

// Delete a task_type
router.delete('/:id', (req, res) => {
    const idUrl = req.params.id;
    connection.query('DELETE FROM task_type WHERE idtask_type = ?', [idUrl], (err) => {
        if (err) {
            res.status(500).send('Error deleting a task_type');
        } else {
            res.sendStatus(200);
        }
    });
});

module.exports = router;