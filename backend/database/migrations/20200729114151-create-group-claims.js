module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "group_claims",
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true,
        },
        group_id: {
          type: Sequelize.UUID,
        },
        claim: {
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
