const { v4: uuidv4 } = require("uuid");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "attribute_mapping",
      [
        {
          id: uuidv4(),
          client_id: "337b9242-2aac-442e-a353-b1290f3eb1bc",
          key: "attribute1",
          value: "value1"
        },
        {
          id: uuidv4(),
          client_id: "337b9242-2aac-442e-a353-b1290f3eb1bc",
          key: "attribute2",
          value: "value2"
        },
        {
          id: uuidv4(),
          client_id: "334b9242-2aac-442e-a353-b1290f3eb1bc",
          key: "attribute3",
          value: "value3"
        },
        {
          id: uuidv4(),
          client_id: "334b9242-2aac-442e-a353-b1290f3eb1bc",
          key: "attribute4",
          value: "value5"
        },
        {
          id: uuidv4(),
          client_id: "339b9242-2aac-442e-a353-b1290f3eb1bc",
          key: "attribute1",
          value: "value1"
        },
        {
          id: uuidv4(),
          client_id: "339b9242-2aac-442e-a353-b1290f3eb1bc",
          key: "attribute2",
          value: "value2"
        }
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("attribute_mapping", null, {});
  }
};
