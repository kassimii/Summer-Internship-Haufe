const { DataTypes } = require("sequelize");
const sequelize = require("./sequelize");
const GroupClaims = require("./group_claims");
const AdvancedSettings = require("./advanced_settings");

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
    freezeTableName: true,
    timestamps: false,
    tableName: "Groups"
  }
);

Group.associate = function () {
  Group.hasMany(GroupClaims, {
    foreignKey: "group_id",
    as: "groupClaims",
    onDelete: "CASCADE"
  });

  Group.hasMany(AdvancedSettings, {
    foreignKey: "group_id",
    as: "advancedSettings",
    onDelete: "CASCADE"
  });
};

module.exports = Group;
