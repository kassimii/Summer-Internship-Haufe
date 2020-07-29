module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("Groups", {
      group_id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(32),
      },
      creationDate: {
        type: DataTypes.DATE,
      },
      createdBy: {
        type: DataTypes.UUID,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("groups");
  },
};
