const express = require('express');
const api = require('./routes');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
// const connection = require('./config');




// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// pour plaire au corse
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

app.use('/api', api);


// ----- TABLE: USER

// Route to select ALL users
// app.get('/api/users', (req, res) => {
//   connection.query('SELECT * from user', (err) => {
//     if (err) {
//       res.status(500).send('Error retrieving user');
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// // Route to select one user
// app.get('/api/users/:id', (req, res) => {
//   const idUser = req.params.id;
//   connection.query('SELECT * from user WHERE iduser = ?', idUser, (err) => {
//     if (err) {
//       res.status(500).send('Error retrieving user');
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// // Route to create ONE user
// app.post('/api/users', (req, res) => {
//   const formData = req.body;
//   connection.query('INSERT INTO user SET ?', formData, (err) => {
//     if (err) {
//       res.status(500).send('Error saving');
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// // Route to modify ONE user
// app.put('/api/user/:id', (req, res) => {
//   const idUrl = req.params.id;
//   const formData = req.body;

//   connection.query(
//     'UPDATE user SET ? WHERE iduser = ?',
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

// // Route to Delete ONE user
// app.delete('/api/user/:id', (req, res) => {
//   const idUrl = req.params.id;
//   connection.query('DELETE FROM user WHERE iduser = ?', [idUrl], (err) => {
//     if (err) {
//       res.status(500).send('Error deleting');
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// // ----- TABLE: COUNTRY

// // Route to select ALL countries
// app.get('/api/countries', (req, res) => {
//   connection.query('SELECT * from country', (err) => {
//     if (err) {
//       res.status(500).send('Error retrieving country');
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// // Route to post ONE country
// app.post('/api/countries', (req, res) => {
//   const formData = req.body;
//   connection.query('INSERT INTO country SET ?', formData, (err) => {
//     if (err) {
//       res.status(500).send('Error saving');
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// // Route to modify ONE country
// app.put('/api/country/:id', (req, res) => {
//   const idUrl = req.params.id;
//   const formData = req.body;

//   connection.query(
//     'UPDATE country SET ? WHERE idcountry = ?',
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

// // Route to Delete ONE country
// app.delete('/api/country/:id', (req, res) => {
//   const idUrl = req.params.id;
//   connection.query('DELETE FROM country WHERE idcountry = ?', [idUrl], (err) => {
//     if (err) {
//       res.status(500).send('Error deleting');
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// // ----- TABLE: CITY

// // Route to select ALL cities
// app.get('/api/cities', (req, res) => {
//   connection.query('SELECT * from city', (err) => {
//     if (err) {
//       res.status(500).send('Error retrieving city');
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// // Route to post ONE city
// app.post('/api/cities', (req, res) => {
//   const formData = req.body;
//   connection.query('INSERT INTO city SET ?', formData, (err) => {
//     if (err) {
//       res.status(500).send('Error saving');
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// // Route to modify ONE city
// app.put('/api/city/:id', (req, res) => {
//   const idUrl = req.params.id;
//   const formData = req.body;

//   connection.query(
//     'UPDATE city SET ? WHERE idcity = ?',
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

// // Route to Delete ONE city
// app.delete('/api/city/:id', (req, res) => {
//   const idUrl = req.params.id;
//   connection.query('DELETE FROM city WHERE idcity = ?', [idUrl], (err) => {
//     if (err) {
//       res.status(500).send('Error deleting');
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

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

// // ----- TABLE: DESTINATION

// // Route to select ALL destinations
// app.get('/api/destinations', (req, res) => {
//   connection.query('SELECT * from destination', (err) => {
//     if (err) {
//       res.status(500).send('Error retrieving destination');
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// // Route to post ONE destination
// app.post('/api/destinations', (req, res) => {
//   const formData = req.body;
//   connection.query('INSERT INTO destination SET ?', formData, (err) => {
//     if (err) {
//       res.status(500).send('Error saving');
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// // Route to modify ONE destination
// app.put('/api/destination/:id', (req, res) => {
//   const idUrl = req.params.id;
//   const formData = req.body;

//   connection.query(
//     'UPDATE destination SET ? WHERE iddestination = ?',
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

// // Route to Delete ONE destination
// app.delete('/api/destination/:id', (req, res) => {
//   const idUrl = req.params.id;
//   connection.query(
//     'DELETE FROM destination WHERE iddestination = ?',
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

// // ----- TABLE: SITUATION

// // Route to select ALL situations
// app.get('/api/situations', (req, res) => {
//   connection.query('SELECT * from situation', (err) => {
//     if (err) {
//       res.status(500).send('Error retrieving situation');
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// // Route to post ONE situation
// app.post('/api/situations', (req, res) => {
//   const formData = req.body;
//   connection.query('INSERT INTO situation SET ?', formData, (err) => {
//     if (err) {
//       res.status(500).send('Error saving');
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// // Route to modify ONE situation
// app.put('/api/situation/:id', (req, res) => {
//   const idUrl = req.params.id;
//   const formData = req.body;

//   connection.query(
//     'UPDATE situation SET ? WHERE idsituation = ?',
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

// // Route to Delete ONE situation
// app.delete('/api/situation/:id', (req, res) => {
//   const idUrl = req.params.id;
//   connection.query(
//     'DELETE FROM situation WHERE idsituation = ?',
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

// // ----- TABLE: ADMIN

// // Route to select ALL admins
// app.get('/api/admins', (req, res) => {
//   connection.query('SELECT * from admin', (err) => {
//     if (err) {
//       res.status(500).send('Error retrieving admin');
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// // Route to post ONE admin
// app.post('/api/admins', (req, res) => {
//   const formData = req.body;
//   connection.query('INSERT INTO admin SET ?', formData, (err) => {
//     if (err) {
//       res.status(500).send('Error saving');
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// // Route to modify ONE admin
// app.put('/api/admin/:id', (req, res) => {
//   const idUrl = req.params.id;
//   const formData = req.body;

//   connection.query(
//     'UPDATE admin SET ? WHERE idadmin = ?',
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

// // Route to Delete ONE admin
// app.delete('/api/admin/:id', (req, res) => {
//   const idUrl = req.params.id;
//   connection.query('DELETE FROM admin WHERE idadmin = ?', [idUrl], (err) => {
//     if (err) {
//       res.status(500).send('Error deleting');
//     } else {
//       res.sendStatus(200);
//     }
//   });
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

app.listen(port, err => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});
