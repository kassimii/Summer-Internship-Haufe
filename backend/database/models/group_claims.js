const { v4: uuidv4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
  const GroupClaim = sequelize.define(
    "claim",
    {
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

  GroupClaim.beforeCreate((claim, _) => {
    return (claim.id = uuidv4());
  });

  // GroupClaim.removeAttribute("id");

  return GroupClaim;
};
