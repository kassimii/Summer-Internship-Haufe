const express = require("express");

const router = express.Router();

const { getAdminByEmail, signin } = require("../controllers/roles-controllers");

router.get("/admin", getAdminByEmail);

router.post("/signin", signin);

module.exports = router;
