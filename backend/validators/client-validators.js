const { check } = require("express-validator");
const models = require("../database/models");
const { Op } = require("sequelize");

module.exports = {
  requireClientName: check("name")
    .not()
    .isEmpty()
    .trim()
    .withMessage("Client name must not be empty"),
  requireGroupId: check("group_id")
    .trim()
    .isUUID()
    .withMessage("Group id is not UUID"),
  requireUserId: check("userId")
    .trim()
    .isUUID()
    .withMessage("User id is not UUID"),
  requireExistingClientId: check("clientId")
    .trim()
    .isUUID()
    .withMessage("Client id is not UUID")
    .custom(async (clientId) => {
      let existingClient;
      try {
        existingClient = await models.Client.findByPk(clientId);
      } catch (err) {
        console.log(err);
      }
      if (!existingClient) {
        return Promise.reject("Client with this id does not exist");
      }
    }),
  requireAdvanedSettingsClients: check("advancedSettingClients")
    .isArray()
    .custom((arr) => {
      return arr.every((e) => {
        if (!e.key || !e.value) return false;
        if (e.key === "" || e.value === "") return false;
        if (typeof e.key !== "string" || typeof e.value !== "string")
          return false;
        return true;
      });
    })
    .withMessage(
      "Advanced settings for client must be an array and key - value pairs, the pairs must be non-empty strings"
    ),
  requireAttributeMappings: check("attributeMappings")
    .isArray()
    .custom((arr) => {
      return arr.every((e) => {
        if (!e.key || !e.value) return false;
        if (e.key === "" || e.value === "") return false;
        return true;
      });
    })
    .withMessage(
      "Attribute mappings must be an array and key - value pairs must not be empty"
    ),
  requireExistingStatus: check("status")
    .isIn(["REQUEST APPROVAL", "NEW", "WAIT FOR DEPLOYMENT", "DEPLOYED"])
    .withMessage("Status not correct"),
};
