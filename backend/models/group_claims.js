const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

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
      type: DataTypes.ARRAY(DataTypes.STRING),
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
