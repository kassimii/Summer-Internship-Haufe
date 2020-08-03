module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "AdvancedSettings",
      {
        group_id: {
          type: Sequelize.UUID,
        },
        key: {
          type: Sequelize.STRING(32),
        },
        value: {
          type: Sequelize.STRING(32),
        },
      },
      {
        tableName: "advanced_settings",
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("advanced_settings");
  },
};
