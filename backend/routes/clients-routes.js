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
  requireExistingClientId,
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
  deleteMetadata,
} = require("../controllers/clients-controllers");

// GET CLIENTS
router.get("/", getClients);

// CREATE CLIENT
router.post(
  "/",
  [
    requireClientName,
    requireGroupId,
    requireAdvanedSettingsClients,
    requireAttributeMappings,
    requireUserId,
  ],
  handleErrors,
  createClient
);

// GET CLIENT BY ID
router.get(
  "/:clientId",
  [requireExistingClientId],
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
    requireGroupId,
  ],
  handleErrors,
  updateClient
);

// DELETE  CLIENT
router.delete(
  "/:clientId",
  [requireExistingClientId],
  handleErrors,
  deleteClient
);

// ADD STATUS
router.post(
  "/:clientId/status",
  [requireExistingStatus, requireUserId, requireExistingClientId],
  handleErrors,
  addStatus
);

// ADD METADATA
router.post("/:clientId/metadata", upload.single("file"), addMetadata);

// GET METADATA FOR A CLIENT
router.get("/:clientId/metadata", getAllMetadata);

// GET METADATA FOR A CLIENT BY METADATA ID
router.get("/:clientId/metadata/:metadataId", getMetadata);

// EDIT METADATA
router.patch("/:clientId/metadata/:metadataId", updateMetadata);

// DELETE METADATA
router.delete("/:clientId/metadata/:metadataId", deleteMetadata);

module.exports = router;
