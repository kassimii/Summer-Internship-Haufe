module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('group',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(32),
      },
      creationDate: {
        type: DataTypes.DATE,
      },
      createdBy: {
        type: DataTypes.UUID,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
      tableName: "groups"
    }
  );

  Group.associate = function (models) {
    Group.hasMany(models.Claim, {
      foreignKey: "group_id",
      // as: "claims",
      onDelete: "CASCADE"
    });

    Group.hasMany(models.AdvancedSetting, {
      foreignKey: "group_id",
      // as: "advancedSettings",
      onDelete: "CASCADE"
    });
  };

  return Group;
}
