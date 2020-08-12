module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("groups", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(32)
      },
      creationDate: {
        type: Sequelize.DATE
      },
      createdBy: {
        type: Sequelize.UUID
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("groups");
  }
};
