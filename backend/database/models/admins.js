const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    "admin",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      emailAddress: {
        type: DataTypes.STRING(32),
        isUnique: true,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
      tableName: "admins",
    }
  );
  return Admin;
};
