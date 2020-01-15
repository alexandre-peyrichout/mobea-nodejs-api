const express = require("express");
const jwt = require("jsonwebtoken");
const connection = require("../config");

const router = express.Router({ mergeParams: true });

router.post("/", verifyToken, (req, res) => {
  jwt.verify(req.token, "chaussetterouge123", (err, authData) => {
    if (err) {
      res.status(403).send("forbidden");
    } else {
      res.json(authData);
    }
  });
});

function verifyToken(req, res, next) {
  const bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== undefined) {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

module.exports = router;
