const express = require("express");

const reason = require("./reason");
const taskType = require("./taskType");
const city = require("./city");
const admin = require("./admin");
const country = require("./country");
const task = require("./task");
const user = require("./user");
const destination = require("./destination");
const situation = require("./situation");
const taskHasDestination = require("./taskHasDestination");
const provider = require("./provider");
const datas = require("./datas");

const router = express.Router();

router.use("/reason", reason);
router.use("/taskType", taskType);
router.use("/city", city);
router.use("/admin", admin);
router.use("/provider", provider);
router.use("/task", task);

router.use("/datas", datas);

router.use("/destination", destination);
router.use("/situation", situation);
router.use("/taskHasDestination", taskHasDestination);

router.use("/user", user);
router.use("/country", country);

module.exports = router;
