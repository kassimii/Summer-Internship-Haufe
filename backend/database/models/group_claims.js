module.export = (sequelize, DataTypes) => {

const GroupClaims = sequelize.define(
  "GroupClaims",
  {
    group_id: {
      type: DataTypes.UUID,
    },
    claims: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    tableName: "GroupClaims"
  }
);


// GroupClaims.associate = function (models) {
//   GroupClaims.belongsTo(models.Group, {
//     foreignKey: "group_id"
//   });

// };

return GroupClaims;
}