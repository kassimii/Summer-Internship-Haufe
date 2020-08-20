module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("admins", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      emailAddress: {
        type: Sequelize.STRING(32),
        isUnique: true,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("admins");
  }
};
