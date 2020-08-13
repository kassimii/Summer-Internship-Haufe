const express = require("express");

const router = express.Router();

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
router.post("/", createClient);
router.get("/:clientId", getClientById);
router.patch("/:clientId", updateClient);
router.delete("/:clientId", deleteClient);
router.post("/:clientId/status", addStatus);
router.post("/:clientId/metadata", addMetadata);
router.get("/:clientId/metadata", getAllMetadata);
router.get("/:clientId/metadata/:metadataId", getMetadata);
router.patch("/:clientId/metadata/:metadataId", updateMetadata);
router.delete("/:clientId/metadata/:metadataId", deleteMetadata);

module.exports = router;
