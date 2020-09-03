const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Metadata = sequelize.define(
    "metadata",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      client_id: {
        type: DataTypes.UUID
      },
      type: {
        type: DataTypes.STRING(32)
      },
      name: {
        type: DataTypes.STRING(32)
      },
      content: {
        type: DataTypes.TEXT
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
