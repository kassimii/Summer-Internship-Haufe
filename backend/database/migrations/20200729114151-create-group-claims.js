module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "GroupClaims",
      {
        group_id: {
          type: Sequelize.UUID,
        },
        claims: {
          type: Sequelize.STRING,
        },
      },
      {
        tableName: "group_claims",
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("group_claims");
  },
};
