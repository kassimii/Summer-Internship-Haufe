module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "AdvancedSettings",
      [
        {
          group_id: "123e4567-e89b-12d3-a456-426614174000",
          key: "key1",
          value: "value1",
        },
        {
          group_id: "123e4567-e89b-12d3-a456-426614174001",
          key: "key2",
          value: "value2",
        },
      ],
      {}
    ),

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("AdvancedSettings", null, {});
  },
};
