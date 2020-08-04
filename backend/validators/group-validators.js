const { check } = require("express-validator");
const models = require("../database/models");

module.exports = {
  requireGroupName: check("name")
    .isLength({ min: 1 })
    .withMessage("Group name must not be empty."),

  // requireUniqueGroupName: check("name").custom(async (req) => {
  //   let existingGroup;
  //   try {
  //     existingGroup = await models.Group.findAll(req.body.name);
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   if (existingGroup) {
  //     console.log("Group already exists.");
  //   }
  //   return true;
  // }),

  // requireClaims: check("claims")
  //   .not()
  //   .isEmpty()
  //   .trim()
  //   .withMessage("Claims must not be empty."),
  // requireAdvancedSettings: check("advancedSettings")
  //   .not()
  //   .isEmpty()
  //   .trim()
  //   .withMessage("Advanced settings must not be empty."),
};
