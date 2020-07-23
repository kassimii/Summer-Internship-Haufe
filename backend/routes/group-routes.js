const express = require("express");

const router = express.Router();

const {
  createGroup,
  deleteGroup,
} = require("../controllers/groups-controllers");

router.post("/", createGroup);
router.delete("/delete/:groupId", deleteGroup);

module.exports = router;
