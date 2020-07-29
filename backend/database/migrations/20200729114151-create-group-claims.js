module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("GroupClaims",
    {
      group_id: {
        type: DataTypes.UUID,
      },
      claims: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
    },
    {
      tableName: "group_claims",
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("groups");
  },
};
