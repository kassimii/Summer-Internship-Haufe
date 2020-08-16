const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define(
    "group",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(32),
        unique: true
      },
      creationDate: {
        type: DataTypes.DATE
      },
      createdBy: {
        type: DataTypes.UUID
      }
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
      onDelete: "CASCADE",
      hooks: true
    });

    Group.hasMany(models.AdvancedSetting, {
      foreignKey: "group_id",
      // as: "advancedSettings",
      onDelete: "CASCADE",
      hooks: true
    });
  };

  return Group;
};
