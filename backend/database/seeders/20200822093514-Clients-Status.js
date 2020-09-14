"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "client_status",
      [
        {
          id: "287c945f-c5f0-4eae-8db9-75e47af1490f",
          client_id: "334b9242-2aac-442e-a353-b1290f3eb1bc",
          status_id: "e5b7a490-2981-44d7-b5b2-86a7dff0ecbd",
          creationDate: "2020-07-25 15:49:52.270000"
        },
        {
          id: "5acc1991-30fb-47a6-b3fd-4ed42aab6996",
          client_id: "334b9242-2aac-442e-a353-b1290f3eb1bc",
          status_id: "03faacda-a3b9-4749-97a4-ef709493a08e",
          creationDate: "2020-07-25 17:59:52.270000"
        },
        {
          id: "831ac52f-bb68-4a2d-ac88-b49cd02fcffa",
          client_id: "337b9242-2aac-442e-a353-b1290f3eb1bc",
          status_id: "e5b7a490-2981-44d7-b5b2-86a7dff0ecbd",
          creationDate: "2020-07-25 15:39:52.270000"
        },
        {
          id: "e92b60e8-4216-4420-9f3f-f77c1ebb8f0c",
          client_id: "339b9242-2aac-442e-a353-b1290f3eb1bc",
          status_id: "e5b7a490-2981-44d7-b5b2-86a7dff0ecbd",
          creationDate: "2020-07-27 15:39:52.270000"
        },
        {
          id: "e24b60e8-4216-4420-9f3f-f77c1ebb8f0c",
          client_id: "347b9242-2aac-442e-a353-b1290f3eb1bc",
          status_id: "e5b7a490-2981-44d7-b5b2-86a7dff0ecbd",
          creationDate: "2020-07-28 15:39:52.270000"
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("groups", null, {});
  }
};
