module.exports = (sequelize, DataTypes) => {
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

AdvancedSettings.removeAttribute("id");

return AdvancedSettings;

};
