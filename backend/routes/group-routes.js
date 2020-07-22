const express = require("express");

const router = express.Router();

const { createGroup } = require("../controllers/groups-controllers");

router.post("/", createGroup);

module.exports = router;
