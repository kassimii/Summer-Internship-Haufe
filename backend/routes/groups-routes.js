const express = require("express");

const router = express.Router();

const {
  requireGroupName,
  requireClaims,
  requireAdvancedSettings
} = require("../validators/group-validators");

const {
  createGroup,
  deleteGroup,
  getGroups,
  getGroupsById,
  updateGroup
} = require("../controllers/groups-controllers");

router.post("/", createGroup);
router.delete("/delete/:groupId", deleteGroup);
router.get("/", getGroups);
router.get("/:groupId", getGroupsById);
router.patch("/:groupId", updateGroup);

module.exports = router;
