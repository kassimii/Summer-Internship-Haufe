const express = require("express");

const router = express.Router();

const {
  requireGroupName,
  requireNotEmptyGroupName,
} = require("../validators/group-validators");

const { handleErrors } = require("../middleware/handle-errors");

const {
  createGroup,
  deleteGroup,
  getGroups,
  getGroupsById,
  updateGroup,
} = require("../controllers/groups-controllers");

router.post("/", [requireGroupName], handleErrors, createGroup);
router.delete("/:groupId", deleteGroup);
router.get("/", getGroups);
router.get("/:groupId", getGroupsById);
router.patch(
  "/:groupId",
  [requireNotEmptyGroupName],
  handleErrors,
  updateGroup
);

module.exports = router;
