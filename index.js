const express = require("express");

const bodyParser = require("body-parser");

const api = require("./src/routes");

const app = express();
const port = 3000;

// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// pour plaire au corse
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/api", api);

// // ----- TABLE: TASK

// // Route to select ALL tasks
// app.get('/api/tasks', (req, res) => {
//   connection.query('SELECT * from task', (err) => {
//     if (err) {
//       res.status(500).send('Error retrieving task');
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// // Route to post ONE task
// app.post('/api/tasks', (req, res) => {
//   const formData = req.body;
//   connection.query('INSERT INTO task SET ?', formData, (err) => {
//     if (err) {
//       res.status(500).send('Error saving');
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// // Route to modify ONE task
// app.put('/api/task/:id', (req, res) => {
//   const idUrl = req.params.id;
//   const formData = req.body;

//   connection.query(
//     'UPDATE task SET ? WHERE idtask = ?',
//     [formData, idUrl],
//     (err) => {
//       if (err) {
//         res.status(500).send('Error editing');
//       } else {
//         res.sendStatus(200);
//       }
//     },
//   );
// });

// // Route to Delete ONE task
// app.delete('/api/task/:id', (req, res) => {
//   const idUrl = req.params.id;
//   connection.query('DELETE FROM task WHERE idtask = ?', [idUrl], (err) => {
//     if (err) {
//       res.status(500).send('Error deleting');
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// // ----- TABLE: TASK_TYPE

// // Route to select ALL tasks_type
// app.get('/api/task_types', (req, res) => {
//   connection.query('SELECT * from task_type', (err) => {
//     if (err) {
//       res.status(500).send('Error retrieving task_type');
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// // Route to post ONE task_type
// app.post('/api/task_types', (req, res) => {
//   const formData = req.body;
//   connection.query('INSERT INTO task_type SET ?', formData, (err) => {
//     if (err) {
//       res.status(500).send('Error saving');
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// // Route to modify ONE task_type
// app.put('/api/task_type/:id', (req, res) => {
//   const idUrl = req.params.id;
//   const formData = req.body;

//   connection.query(
//     'UPDATE task_type SET ? WHERE idtask_type = ?',
//     [formData, idUrl],
//     (err) => {
//       if (err) {
//         res.status(500).send('Error editing');
//       } else {
//         res.sendStatus(200);
//       }
//     },
//   );
// });

// // Route to Delete ONE task_type
// app.delete('/api/task_type/:id', (req, res) => {
//   const idUrl = req.params.id;
//   connection.query(
//     'DELETE FROM task_type WHERE idtask_type = ?',
//     [idUrl],
//     (err) => {
//       if (err) {
//         res.status(500).send('Error deleting');
//       } else {
//         res.sendStatus(200);
//       }
//     },
//   );
// });

// // ----- TABLE: TASK_HAS_DESTINATION

// // Route to select ALL tasks_has_destination
// app.get('/api/task_has_destinations', (req, res) => {
//   connection.query('SELECT * from task_has_destination', (err, results) => {
//     if (err) {
//       res.status(500).send('Error retrieving task has destination');
//     } else {
//       res.json(results);
//     }
//   });
// });

// // Route to post ONE task_has_destination
// app.post('/api/task_has_destinations', (req, res) => {
//   const formData = req.body;
//   connection.query('INSERT INTO task_has_destination SET ?', formData, (err) => {
//     if (err) {
//       res.status(500).send('Error saving');
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// // Route to modify ONE task_has_destination
// app.put('/api/task_has_destination/:id', (req, res) => {
//   const idUrl = req.params.id;
//   const formData = req.body;

//   connection.query(
//     'UPDATE task_has_destination SET ? WHERE idtask_has_destination = ?',
//     [formData, idUrl],
//     (err) => {
//       if (err) {
//         res.status(500).send('Error editing');
//       } else {
//         res.sendStatus(200);
//       }
//     },
//   );
// });

// // Route to Delete ONE task_has_destination
// app.delete('/api/task_has_destination/:id', (req, res) => {
//   const idUrl = req.params.id;
//   connection.query(
//     'DELETE FROM task_has_destination WHERE idtask_has_destination = ?',
//     [idUrl],
//     (err) => {
//       if (err) {
//         res.status(500).send('Error deleting');
//       } else {
//         res.sendStatus(200);
//       }
//     },
//   );
// });

// // ----- TABLE: REASON

// // Route to select ALL reasons
// app.get('/api/reasons', (req, res) => {
//   connection.query('SELECT * from reason', (err, results) => {
//     if (err) {
//       res.status(500).send('Error retrieving reason');
//     } else {
//       res.json(results);
//     }
//   });
// });

// // Route to post ONE reason
// app.post('/api/reasons', (req, res) => {
//   const formData = req.body;
//   connection.query('INSERT INTO reason SET ?', formData, (err) => {
//     if (err) {
//       res.status(500).send('Error saving');
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// // Route to modify ONE reason
// app.put('/api/reason/:id', (req, res) => {
//   const idUrl = req.params.id;
//   const formData = req.body;

//   connection.query(
//     'UPDATE reason SET ? WHERE idreason = ?',
//     [formData, idUrl],
//     (err) => {
//       if (err) {
//         res.status(500).send('Error editing');
//       } else {
//         res.sendStatus(200);
//       }
//     },
//   );
// });

// // Route to Delete ONE reason
// app.delete('/api/reason/:id', (req, res) => {
//   const idUrl = req.params.id;
//   connection.query('DELETE FROM country WHERE idreason = ?', [idUrl], (err) => {
//     if (err) {
//       res.status(500).send('Error deleting');
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

app.listen(3000, (err) => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`Server is listening on ${port}`);
});
