const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("postgres://user:1234@localhost:3001/haufe");

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const GroupClaims = sequelize.define(
  "GroupClaims",
  {
    group_id: {
      type: DataTypes.UUID,
    },
    claims: {
      type: DataTypes.STRING(32),
    },
  },
  {
    tableName: "group_claims",
  },

  {
    freezeTableName: true,
    timestamps: false,
    tableName: "group_claims",
  }
);

module.exports = GroupClaims;
