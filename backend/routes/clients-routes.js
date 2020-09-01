const express = require("express");

const router = express.Router();

const upload = require("../middleware/uploadMetadatas");

const {
  requireClientName,
  requireGroupId,
  requireUserId,
  requireAdvanedSettingsClients,
  requireAttributeMappings,
  requireExistingStatus,
  requireExistingClientId
} = require("../validators/client-validators");

const { handleErrors } = require("../middleware/handle-errors");

const {
  getClients,
  createClient,
  getClientById,
  updateClient,
  deleteClient,
  addStatus,
  addMetadata,
  getAllMetadata,
  getMetadata,
  updateMetadata,
  deleteMetadata
} = require("../controllers/clients-controllers");
const { isAuth } = require("../util");

// GET CLIENTS
router.get("/", isAuth, getClients);

// CREATE CLIENT
router.post(
  "/",
  [
    requireClientName,
    requireGroupId,
    requireAdvanedSettingsClients,
    requireAttributeMappings,
    requireUserId
  ],
  isAuth,
  handleErrors,
  createClient
);

// GET CLIENT BY ID
router.get(
  "/:clientId",
  [requireExistingClientId],
  isAuth,
  handleErrors,
  getClientById
);

// EDIT CLIENT
router.patch(
  "/:clientId",
  [
    requireExistingClientId,
    requireAdvanedSettingsClients,
    requireAttributeMappings,
    requireUserId,
    requireClientName,
    requireGroupId
  ],
  isAuth,
  handleErrors,
  updateClient
);

// DELETE  CLIENT
router.delete(
  "/:clientId",
  [requireExistingClientId],
  isAuth,
  handleErrors,
  deleteClient
);

// ADD STATUS
router.post(
  "/:clientId/status",
  [requireExistingStatus, requireUserId, requireExistingClientId],
  isAuth,
  handleErrors,
  addStatus
);

// ADD METADATA
router.post("/:clientId/metadata", upload.single("file"), isAuth, addMetadata);

// GET METADATA FOR A CLIENT
router.get("/:clientId/metadata", isAuth, getAllMetadata);

// GET METADATA FOR A CLIENT BY METADATA ID
router.get("/:clientId/metadata/:metadataId", isAuth, getMetadata);

// EDIT METADATA
router.patch("/:clientId/metadata/:metadataId", isAuth, updateMetadata);

// DELETE METADATA
router.delete("/:clientId/metadata/:metadataId", isAuth, deleteMetadata);

module.exports = router;
