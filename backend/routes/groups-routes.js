const express = require("express");

const router = express.Router();

const {
  createGroup,
  deleteGroup,
  getGroups,
  getGroupsById,
  updateGroup,
} = require("../controllers/groups-controllers");

router.post("/", createGroup);
router.delete("/delete/:groupId", deleteGroup);
router.get("/", getGroups);
router.get("/:groupId", getGroupsById);
router.patch("/update/:groupId", updateGroup);

module.exports = router;
