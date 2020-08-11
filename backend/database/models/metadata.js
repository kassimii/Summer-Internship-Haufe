module.exports = (sequelize, DataTypes) => {
  const Metadata = sequelize.define(
    "metadata",
    {
      id: {
        type: DataTypes.UUID,
        defaulValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      client_id: {
        type: DataTypes.UUID
      },
      type: {
        type: DataTypes.STRING(32)
      },
      content: {
        type: DataTypes.BLOB
      }
    },
    {
      freezeTableName: true,
      timestamps: false,
      tableName: "metadata"
    }
  );

  return Metadata;
};
