module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "groups",
      [
        {
          id: "123e4567-e89b-12d3-a456-426614174111",
          name: "asd",
          creationDate: "2020-06-30 15:39:52.270000",
          createdBy: "dbbd63b8-b481-466b-bb1a-d0e2b43d8afd",
        },
        {
          id: "123e4567-e89b-12d3-a456-426614174012",
          name: "group20",
          creationDate: "2020-06-30 15:39:52.270000",
          createdBy: "dbbd63b8-b481-466b-bb1a-d0e2b53d8afd",
        },
      ],
      {}
    ),

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("groups", null, {});
  },
};
