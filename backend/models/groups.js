const { Sequelize, DataTypes, DATE } = require("sequelize");
const sequelize = new Sequelize("postgres://user:1234@localhost:3000/postgres");
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const Group = sequelize.define(
  "Group",
  {
    group_id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(32),
    },
    creationDate: {
      type: DataTypes.DATE,
    },
    createdBy: {
      type: DataTypes.UUID,
    },
  },
  {
    tableName: "groups",
  }
);
// Group.sync({ force: true }).then(() => {
//   return Group.create({
//     group_id: "6bbd63b8-b481-466b-bb1a-d0e2b43d8afd",
//     name: "test",
//     creation_date: "2020-06-30 15:39:52.270000",
//     createdBy: "dbbd63b8-b481-466b-bb1a-d0e2b43d8afd",
//   });
// });
module.exports = Group;
