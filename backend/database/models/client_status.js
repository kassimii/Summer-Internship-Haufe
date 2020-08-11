module.exports = (sequelize, DataTypes) => {
  const ClientStatus = sequelize.define(
    "clientStatus",
    {
      id: {
        type: DataTypes.UUID,
        defaulValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      client_id: {
        type: DataTypes.UUID
      },
      status_id: {
        type: DataTypes.UUID
      },
      creationDate: {
        type: DataTypes.DATE
      }
    },
    {
      freezeTableName: true,
      timestamps: false,
      tableName: "client_status"
    }
  );

  return ClientStatus;
};
