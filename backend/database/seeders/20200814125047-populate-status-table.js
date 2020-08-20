const { v4: uuidv4 } = require("uuid");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("status", [
      { id: uuidv4(), type: "NEW" },
      { id: uuidv4(), type: "REQUEST APPROVAL" },
      { id: uuidv4(), type: "WAIT FOR DEPLOYMENT" },
      { id: uuidv4(), type: "DEPLOYED" }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("status", null, {});
  }
};
