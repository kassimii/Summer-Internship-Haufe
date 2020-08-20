const { UUIDV4 } = require("sequelize");

const { v4: uuidv4 } = require("uuid");
module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "group_claims",
      [
        {
          id: uuidv4(),
          group_id: "337b9242-2aac-442e-a353-b1290f3eb1bc",
          claim: "claim1"
        },
        {
          id: uuidv4(),
          group_id: "337b9242-2aac-442e-a353-b1290f3eb1bc",
          claim: "claim2"
        },
        {
          id: uuidv4(),
          group_id: "97af767d-55ab-4c45-9020-3096e49a19bf",
          claim: "claim3"
        },
        {
          id: uuidv4(),
          group_id: "97af767d-55ab-4c45-9020-3096e49a19bf",
          claim: "claim4"
        }
      ],
      {}
    ),

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("group_claims", null, {});
  }
};
