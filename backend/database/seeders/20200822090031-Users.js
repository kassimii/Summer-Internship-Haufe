"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          id: "cd0fe44f-f8de-4635-bf1a-0418382fa60a",
          emailAddress: "rotariualex@gmail.com",
          firstName: "Alex",
          lastName: "Rotariu",
          lastLoginDate: "2020-06-30 17:39:52.270000"
        },
        {
          id: "ab0fe44f-f8de-4635-bf1a-0418382fa60a",
          emailAddress: "bocpatricia@gmail.com",
          firstName: "Boc",
          lastName: "Patricia",
          lastLoginDate: "2020-07-30 17:39:52.270000"
        },
        {
          id: "ef0fe44f-f8de-4635-bf1a-0418382fa60a",
          emailAddress: "turdasanbogdan@gmail.com",
          firstName: "Bogdan",
          lastName: "Turdasan",
          lastLoginDate: "2020-07-15 17:39:52.270000"
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("users", null, {});
  }
};
