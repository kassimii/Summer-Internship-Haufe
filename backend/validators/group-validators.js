const { check } = require("express-validator");
const models = require("../database/models");
const { Op } = require("sequelize");

module.exports = {
  requireGroupName: check("name")
    .not()
    .isEmpty()
    .trim()
    .withMessage("Group name must not be empty.")
    .custom(async (group_name) => {
      let existingGroup;
      try {
        existingGroup = await models.Group.findOne({
          where: {
            name: {
              [Op.eq]: group_name,
            },
          },
        });
      } catch (error) {
        console.log(error);
      }

      if (existingGroup) {
        return Promise.reject("Group already exists");
      }
      return true;
    }),
};
