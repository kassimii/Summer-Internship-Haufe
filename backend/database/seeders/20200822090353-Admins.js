"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "admins",
      [
        {
          id: "404b9242-2aac-442e-a353-b1290f3eb1bc",
          emailAddress: "turdasanbogdan@gmail.com"
        },
        {
          id: "474b9242-2aac-442e-a353-b1290f3eb1bc",
          emailAddress: "bocpatricia@gmail.com"
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("admins", null, {});
  }
};
