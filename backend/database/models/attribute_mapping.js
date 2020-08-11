module.exports = (sequelize, DataTypes) => {
  const AttributeMapping = sequelize.define(
    "attributeMapping",
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
      tableName: "attribute_mapping"
    }
  );

  return AttributeMapping;
};
