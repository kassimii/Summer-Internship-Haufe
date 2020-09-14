module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "status",
      {
        id: {
          type: Sequelize.UUID,
          defaulValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        type: {
          type: Sequelize.STRING(32)
        }
      },
      {
        tableName: "status"
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("status");
  }
};
