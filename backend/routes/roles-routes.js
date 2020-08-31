const express = require("express");

const router = express.Router();

const { getAdminByEmail } = require("../controllers/roles-controllers");

router.get("/", getAdminByEmail);

module.exports = router;
