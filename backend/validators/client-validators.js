const { check } = require("express-validator");
const models = require("../database/models");
const { Op } = require("sequelize");
const { clearCache } = require("ejs");

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
  requireUserId: check("user_id")
    .trim()
    .isUUID()
    .withMessage("Group id is not UUID")
    .custom(async (user_id) => {
      try {
        console.log("aici");
        const existingUser = await models.User.findByPk({ user_id });
      } catch (err) {
        console.log(err);
      }
      if (!existingUser) {
        return Promise.reject("User with this id does not exist");
      }
    }),
  requireAdvanedSettingsClients: check("advancedSettingClients")
    .isArray()
    .custom((arr) => {
      return arr.every((e) => {
        if (!e.key || !e.value) return false;
        if (e.key === "" || e.value === "") return false;
        return true;
      });
    })
    .withMessage(
      "Advanced settings for client must be an array and key - value pairs must not be empty"
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
    .withMessage("Status not correct")
};
