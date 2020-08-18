const express = require("express");

const router = express.Router();

const {
  requireClientName,
  requireGroupId,
  requireUserId,
  requireAdvanedSettingsClients,
  requireAttributeMappings,
  requireExistingStatus,
  requireClientIdParam,
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

router.get("/", getClients);
router.post(
  "/",
  [
    requireClientName,
    requireGroupId,
    requireAdvanedSettingsClients,
    requireAttributeMappings,
    requireUserId
  ],
  handleErrors,
  createClient
);
router.get("/:clientId", [requireClientIdParam], handleErrors, getClientById);
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
  handleErrors,
  updateClient
);
router.delete(
  "/:clientId",
  [requireExistingClientId],
  handleErrors,
  deleteClient
);
router.post(
  "/:clientId/status",
  [requireExistingStatus, requireUserId],
  handleErrors,
  addStatus
);
router.post("/:clientId/metadata", addMetadata);
router.get("/:clientId/metadata", getAllMetadata);
router.get("/:clientId/metadata/:metadataId", getMetadata);
router.patch("/:clientId/metadata/:metadataId", updateMetadata);
router.delete("/:clientId/metadata/:metadataId", deleteMetadata);

module.exports = router;
