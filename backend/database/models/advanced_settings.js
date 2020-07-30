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

const AdvancedSettings = sequelize.define(
  "AdvancedSettings",
  {
    group_id: {
      type: DataTypes.UUID,
    },
    key: {
      type: DataTypes.STRING(32),
    },
    value: {
      type: DataTypes.STRING(32),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    tableName: "AdvancedSettings",
  }
);

AdvancedSettings.associate = function (models) {
  AdvancedSettings.belongsTo(Group, {
    foreignKey: "group_id"
  });
} 

module.exports = AdvancedSettings;
