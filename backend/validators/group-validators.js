const { check } = require("express-validator");
const Group = require("../database/models/groups");

module.exports = {
  requireGroupName: check("name")
    .not()
    .isEmpty()
    .trim()
    .withMessage("Group name must not be empty."),
  // .custom(async (name) => {
  //   let existingGroup;
  //   try {
  //     existingGroup = await Group.findAll({ name });
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   if (existingGroup) {
  //     console.log("Group already exists.");
  //   }
  //   return true;
  // })
  requireClaims: check("claims")
    .not()
    .isEmpty()
    .trim()
    .withMessage("Claims must not be empty."),
  requireAdvancedSettings: check("advancedSettings")
    .not()
    .isEmpty()
    .trim()
    .withMessage("Advanced settings must not be empty."),
};
