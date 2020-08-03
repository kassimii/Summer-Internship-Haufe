module.exports = (sequelize, DataTypes) => {
  const GroupClaims = sequelize.define(
    "GroupClaims",
    {
      group_id: {
        type: DataTypes.UUID,
      },
      claims: {
        type: DataTypes.STRING,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
      tableName: "GroupClaims",
    }
  );

  GroupClaims.removeAttribute("id");

  return GroupClaims;
};
