const express = require("express");

const router = express.Router();

const {
  getClients,
  createClient,
  getClient,
  updateClient,
  deleteClient,
  addStatus
} = require("../controllers/client-controllers");

router.get("/", getClients);
router.post("/", createClient);
router.get("/:clientId", getClient);
router.patch("/:clientId", updateClient);
router.delete("/:clientId", deleteClient);
router.post("/:clientId/status", addStatus);
