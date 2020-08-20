const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    emailAddress: {
      type: DataTypes.STRING(32),
      isUnique: true,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    lastLoginDate: {
      type: DataTypes.DATE
    }
  });
  return User;
};
