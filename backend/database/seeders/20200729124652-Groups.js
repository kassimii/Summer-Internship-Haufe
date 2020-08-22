module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "groups",
      [
        {
          id: "337b9242-2aac-442e-a353-b1290f3eb1bc",
          name: "group1",
          creationDate: "2020-06-30 15:39:52.270000",
          createdBy: "404b9242-2aac-442e-a353-b1290f3eb1bc"
        },
        {
          id: "97af767d-55ab-4c45-9020-3096e49a19bf",
          name: "group2",
          creationDate: "2020-06-30 15:39:52.270000",
          createdBy: "dbbd63b8-b481-466b-bb1a-d0e2b53d8afd"
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("groups", null, {});
  }
};
