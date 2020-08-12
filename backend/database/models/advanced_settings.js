const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const AdvancedSetting = sequelize.define(
    "advancedSetting",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      group_id: {
        type: DataTypes.UUID
      },
      key: {
        type: DataTypes.STRING(32)
      },
      value: {
        type: DataTypes.STRING(32)
      }
    },
    {
      freezeTableName: true,
      timestamps: false,
      tableName: "advanced_settings"
    }
  );

  // AdvancedSetting.removeAttribute("id");

  return AdvancedSetting;
};
