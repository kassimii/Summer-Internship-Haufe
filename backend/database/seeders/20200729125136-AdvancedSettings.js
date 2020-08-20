const { v4: uuidv4 } = require("uuid");
module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "advanced_settings",
      [
        {
          id: uuidv4(),
          group_id: "97af767d-55ab-4c45-9020-3096e49a19bf",
          key: "key1",
          value: "value1"
        },
        {
          id: uuidv4(),
          group_id: "337b9242-2aac-442e-a353-b1290f3eb1bc",
          key: "key2",
          value: "value2"
        }
      ],
      {}
    ),

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("advanced_settings", null, {});
  }
};
