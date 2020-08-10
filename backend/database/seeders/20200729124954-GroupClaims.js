module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "group_claims",
      [
        {
          group_id: "123e4567-e89b-12d3-a456-426614174000",
          claim: ["claim1", "claim2"],
        },
        {
          group_id: "123e4567-e89b-12d3-a456-426614174001",
          claim: ["claim3", "claim4"],
        },
      ],
      {}
    ),

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("group_claims", null, {});
  },
};
