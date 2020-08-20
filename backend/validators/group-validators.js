const { check } = require("express-validator");
const models = require("../database/models");
const { Op } = require("sequelize");

module.exports = {
  requireGroupName: check("name")
    .not()
    .isEmpty()
    .trim()
    .withMessage("Group name must not be empty."),
  requireUserId: check("user_id")
    .trim()
    .isUUID()
    .withMessage("Creator id is not UUID"),
  requireClaims: check("claims")
    .isArray()
    .custom((arr) => {
      return arr.every((e) => {
        if (e === "") return false;
        if (typeof e.key !== "string" || typeof e.value !== "string")
          return false;
        return true;
      });
    }),
  requireAdvanedSettings: check("advancedSettings")
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
      "Advanced settings must be an array and key - value pairs, the pairs must be non-empty strings"
    ),
  requireExistingGroupId: check("groupId")
    .trim()
    .isUUID()
    .withMessage("Group id is not UUID")
    .custom(async (groupId) => {
      let existingGroup;
      try {
        existingGroup = await models.Group.findByPk(groupId);
      } catch (err) {
        console.log(err);
      }
      if (!existingGroup) {
        return Promise.reject("Group with this id does not exist");
      }
    })
};
