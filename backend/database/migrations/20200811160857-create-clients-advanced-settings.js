"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "advanced_settings_clients",
      {
        id: {
          type: Sequelize.UUID,
          defaulValue: Sequelize.UUIDV4,
          primaryKey: true
        },
        client_id: {
          type: Sequelize.UUID
        },
        key: {
          type: Sequelize.STRING(32)
        },
        value: {
          type: Sequelize.STRING(32)
        }
      },
      {
        tableName: "advanced_settings_clients"
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("advanced_settings_clients");
  }
};
