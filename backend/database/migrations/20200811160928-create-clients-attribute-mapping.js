"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "attribute_mapping",
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
        tableName: "attribute_mapping"
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("attribute_mapping");
  }
};
