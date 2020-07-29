module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      "AdvancedSettings",
      {
        group_id: {
          type: DataTypes.UUID,
        },
        key: {
          type: DataTypes.STRING(32),
        },
        value: {
          type: DataTypes.STRING(32),
        },
      },
      {
        tableName: "advanced_settings",
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("groups");
  },
};
