module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("status", [
      { id: "e5b7a490-2981-44d7-b5b2-86a7dff0ecbd", type: "NEW" },
      { id: "03faacda-a3b9-4749-97a4-ef709493a08e", type: "REQUEST APPROVAL" },
      {
        id: "49ca52e7-e2ca-4bf2-b07f-41f4a56a9fd7",
        type: "WAIT FOR DEPLOYMENT"
      },
      { id: "d5d46655-c63d-463d-bc61-7f8ee5d4b2a5", type: "DEPLOYED" }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("status", null, {});
  }
};
