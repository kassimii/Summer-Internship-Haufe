"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "client_status",
      {
        id: {
          type: Sequelize.UUID,
          defaulValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        client_id: {
          type: Sequelize.UUID
        },
        status_id: {
          type: Sequelize.UUID
        },
        creationDate: {
          type: Sequelize.DATE
        }
      },
      {
        tableName: "client_status"
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("client_status");
  }
};
