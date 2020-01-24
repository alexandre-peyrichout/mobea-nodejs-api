const express = require("express");
const connection = require("../config");

const router = express.Router({ mergeParams: true });

router.get("/userDestinations", (req, res) => {
  const { user } = req.query;
  connection.query(
    "SELECT d.iddestination AS id, country.name AS country, country.flag, city.name AS city, d.arrival_date, r.name AS reason  FROM destination AS d JOIN reason AS r ON d.reason_idreason = r.idreason JOIN country ON d.country_idcountry = country.idcountry JOIN city ON d.city_idcity = city.idcity WHERE d.user_iduser = ?",
    user,
    (err, userDestinations) => {
      if (err) {
        res.status(500).send("Error retrieving task_has_destination");
      } else {
        res.json(userDestinations);
      }
    }
  );
});

router.get("/userData", (req, res) => {
  const { user } = req.query;
  connection.query(
    "SELECT user.*, situation.name AS situation FROM user JOIN situation ON user.situation_idsituation = situation.idsituation WHERE iduser = ?",
    user,
    (err, userData) => {
      if (err) {
        res.status(500).send("Error retrieving task_has_destination");
      } else {
        res.json(userData[0]);
      }
    }
  );
});

router.get("/userChecklists", (req, res) => {
  const { user } = req.query;
  connection.query(
    "SELECT task_has_destination.task_idtask, task_has_destination.destination_iddestination, task_has_destination.isdone, task.content, task_type.name AS type FROM task_has_destination JOIN destination ON destination.iddestination = task_has_destination.destination_iddestination JOIN task ON task.idtask = task_has_destination.task_idtask JOIN task_type ON task_type.idtask_type = task.task_type_idtask_type WHERE destination.user_iduser = ?",
    user,
    (err, userChecklists) => {
      if (err) {
        res.status(500).send("Error retrieving task_has_destination");
      } else {
        res.json(userChecklists);
      }
    }
  );
});

router.get("/stats", (req, res) => {
  const { destination } = req.query;
  connection.query(
    "SELECT count(task_has_destination.isdone) AS total, task_type.name AS type, task_type.idtask_type, (SELECT AVG(percent) AS progress FROM(SELECT  (SUM(CASE WHEN task_has_destination.isdone = 1 THEN 1 ELSE 0 END) * 100) / SUM(CASE WHEN task_has_destination.isdone = 0 OR 1 THEN 1 ELSE 0 END) AS percent FROM task_has_destination JOIN task ON task_has_destination.task_idtask = task.idtask JOIN task_type ON task.task_type_idtask_type = task_type.idtask_type JOIN destination ON task_has_destination.destination_iddestination = destination.iddestination WHERE destination_iddestination = ? GROUP BY task.task_type_idtask_type) MyTable) AS global, SUM(CASE WHEN task_has_destination.isdone = 1 THEN 1 ELSE 0 END) AS done, SUM(CASE WHEN task_has_destination.isdone = 0 THEN 1 ELSE 0 END) AS result, (SUM(CASE WHEN task_has_destination.isdone = 1 THEN 1 ELSE 0 END) * 100) / SUM(CASE WHEN task_has_destination.isdone = 0 THEN 1 ELSE 0 END) AS percent FROM task_has_destination JOIN task ON task_has_destination.task_idtask = task.idtask JOIN task_type ON task.task_type_idtask_type = task_type.idtask_type JOIN destination ON task_has_destination.destination_iddestination = destination.iddestination WHERE destination_iddestination = ? GROUP BY task.task_type_idtask_type",
    [destination, destination],
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving task_has_destination");
      } else {
        res.json(results);
      }
    }
  );
});

module.exports = router;
