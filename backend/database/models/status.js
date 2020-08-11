module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define(
    "status",
    {
      id: {
        type: DataTypes.UUID,
        defaulValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      type: {
        type: DataTypes.STRING(32)
      }
    },
    {
      freezeTableName: true,
      timestamps: false,
      tableName: "status"
    }
  );

  Status.associate = function (models) {
    Status.hasMany(models.ClientStatus, {
      foreignKey: "status_id",
      onDelete: "CASCADE",
      hooks: true
    });
  };

  return Status;
};
