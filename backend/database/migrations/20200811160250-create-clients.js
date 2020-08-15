module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "clients",
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true
        },
        group_id: {
          type: Sequelize.UUID
        },
        user_id: {
          type: Sequelize.UUID
        },
        name: {
          type: Sequelize.STRING(32)
        },
        creationDate: {
          type: Sequelize.DATE
        },
        createdBy: {
          type: Sequelize.UUID
        },
        lastModified: {
          type: Sequelize.DATE
        },
        lastModifiedBy: {
          type: Sequelize.UUID
        },
        lastDeployed: {
          type: Sequelize.DATE
        }
      },
      {
        tableName: "clients"
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("clients");
  }
};
