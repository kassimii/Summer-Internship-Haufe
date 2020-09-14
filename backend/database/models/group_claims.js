const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Claim = sequelize.define(
    "claim",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      group_id: {
        type: DataTypes.UUID
      },
      claim: {
        type: DataTypes.STRING(32)
      }
    },
    {
      freezeTableName: true,
      timestamps: false,
      tableName: "group_claims"
    }
  );

  return Claim;
};
