module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      emailAddress: {
        type: Sequelize.STRING(32),
        isUnique: true,
        allowNull: false
      },
      firstName: {
        type: Sequelize.STRING(32),
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING(32),
        allowNull: false
      },
      lastLoginDate: {
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  }
};
