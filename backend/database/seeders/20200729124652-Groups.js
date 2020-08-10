module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Groups",
      [
        {
          group_id: "123e4567-e89b-12d3-a456-426614174000",
          name: "group1",
          creationDate: "2020-06-30 15:39:52.270000",
          createdBy: "dbbd63b8-b481-466b-bb1a-d0e2b43d8afd",
        },
        {
          group_id: "123e4567-e89b-12d3-a456-426614174001",
          name: "group2",
          creationDate: "2020-06-30 15:39:52.270000",
          createdBy: "dbbd63b8-b481-466b-bb1a-d0e2b53d8afd",
        },
      ],
      {}
    ),

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("Groups", null, {});
  },
};
