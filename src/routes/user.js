const express = require('express');
const connection = require("../config")

const router = express.Router({ mergeParams: true });
const user = require('../config');

router.get('/', (req, res) => {

    connection.query("SELECT * FROM user")
})