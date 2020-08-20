const express = require("express");

const router = express.Router();

const {
  requireGroupName,
  requireUserId,
  requireClaims,
  requireAdvanedSettings,
  requireExistingGroupId
} = require("../validators/group-validators");

const { handleErrors } = require("../middleware/handle-errors");

const {
  createGroup,
  deleteGroup,
  getGroups,
  getGroupsById,
  updateGroup
} = require("../controllers/groups-controllers");

// CREATE GROUP
router.post(
  "/",
  [requireGroupName, requireUserId, requireClaims, requireAdvanedSettings],
  handleErrors,
  createGroup
);

// DELETE GROUP
router.delete("/:groupId", [requireExistingGroupId], handleErrors, deleteGroup);

// GET GROUPS
router.get("/", getGroups);

// GET GROUP BY ID
router.get("/:groupId", [requireExistingGroupId], handleErrors, getGroupsById);

// EDIT GROUP
router.patch(
  "/:groupId",
  [
    requireExistingGroupId,
    requireAdvanedSettings,
    requireClaims,
    requireGroupName
  ],
  handleErrors,
  updateGroup
);

module.exports = router;
