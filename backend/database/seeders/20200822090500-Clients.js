module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "clients",
      [
        {
          id: "337b9242-2aac-442e-a353-b1290f3eb1bc",
          group_id: "337b9242-2aac-442e-a353-b1290f3eb1bc",
          name: "client1",
          creationDate: "2020-07-25 15:39:52.270000",
          createdBy: "cd0fe44f-f8de-4635-bf1a-0418382fa60a",
          lastModified: "2020-07-25 15:39:52.270000",
          lastModifiedBy: "cd0fe44f-f8de-4635-bf1a-0418382fa60a"
        },
        {
          id: "334b9242-2aac-442e-a353-b1290f3eb1bc",
          group_id: "337b9242-2aac-442e-a353-b1290f3eb1bc",
          name: "client2",
          creationDate: "2020-07-25 15:49:52.270000",
          createdBy: "cd0fe44f-f8de-4635-bf1a-0418382fa60a",
          lastModified: "2020-07-25 17:59:52.270000",
          lastModifiedBy: "ef0fe44f-f8de-4635-bf1a-0418382fa60a"
        },
        {
          id: "339b9242-2aac-442e-a353-b1290f3eb1bc",
          group_id: "97af767d-55ab-4c45-9020-3096e49a19bf",
          name: "client3",
          creationDate: "2020-07-27 15:39:52.270000",
          createdBy: "ef0fe44f-f8de-4635-bf1a-0418382fa60a",
          lastModified: "2020-07-27 15:39:52.270000",
          lastModifiedBy: "ef0fe44f-f8de-4635-bf1a-0418382fa60a"
        },
        {
          id: "347b9242-2aac-442e-a353-b1290f3eb1bc",
          group_id: "97af767d-55ab-4c45-9020-3096e49a19bf",
          name: "client4",
          creationDate: "2020-07-28 15:39:52.270000",
          createdBy: "ab0fe44f-f8de-4635-bf1a-0418382fa60a",
          lastModified: "2020-07-28 15:39:52.270000",
          lastModifiedBy: "ab0fe44f-f8de-4635-bf1a-0418382fa60a"
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("clients", null, {});
  }
};
