const { check } = require("express-validator");
const models = require("../database/models");
const { Op } = require("sequelize");

module.exports = {
  requireGroupName: check("name")
    .not()
    .isEmpty()
    .trim()
    .withMessage("Group name must not be empty.")
};
