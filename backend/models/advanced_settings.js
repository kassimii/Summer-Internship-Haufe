const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("postgres://user:1234@localhost:3000/haufe");

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
    tableName: "advanced_settings",
  },

  {
    freezeTableName: true,
    timestamps: false,
    tableName: "advanced_settings",
  }
);

module.exports = AdvancedSettings;
