const { DataTypes } = require("sequelize");
const sequelize = require("./sequelize");
const Group = require("./groups");

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
    freezeTableName: true,
    timestamps: false,
    tableName: "GroupClaims",
  }
);


GroupClaims.associate = function (models) {
  GroupClaims.belongsTo(models.Group, {
    foreignKey: "group_id"
  });

};


module.exports = GroupClaims;
