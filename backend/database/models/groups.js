module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group',
  {
    group_id: {
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
    tableName: "Groups"
  }
  );
Group.associate = function (models) {
  Group.hasMany(models.GroupClaims, {
    foreignKey: "group_id",
    as: "groupClaims",
    onDelete: "CASCADE"
  });

  Group.hasMany(models.AdvancedSettings, {
    foreignKey: "group_id",
    as: "advancedSettings",
    onDelete: "CASCADE"
  });
};

 return Group;
}
