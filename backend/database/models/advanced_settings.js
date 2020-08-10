const {v4: uuidv4} = require("uuid");

module.exports = (sequelize, DataTypes) => {
const AdvancedSetting = sequelize.define(
  "advancedSetting",
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
    tableName: "advanced_settings",
  }
);

  AdvancedSetting.beforeCreate((advancedSetting, _) => {
    return advancedSetting.id = uuidv4();
  });

// AdvancedSetting.removeAttribute("id");

return AdvancedSetting;

};
