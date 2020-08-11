module.exports = (sequelize, DataTypes) => {
  const AdvancedSettingClient = sequelize.define(
    "advancedSettingClient",
    {
      id: {
        type: DataTypes.UUID,
        defaulValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      client_id: {
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
      tableName: "advanced_settings_clients"
    }
  );

  return AdvancedSettingClient;
};
