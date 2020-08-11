"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "metadata",
      {
        id: {
          type: Sequelize.UUID,
          primaryKey: true
        },
        client_id: {
          type: Sequelize.UUID
        },
        type: {
          type: Sequelize.STRING(32)
        },
        content: {
          type: Sequelize.BLOB
        }
      },
      {
        tableName: "metadata"
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("metadata");
  }
};
