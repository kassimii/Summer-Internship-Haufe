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

module.exports = Group;
