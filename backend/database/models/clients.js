const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define(
    "client",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(32)
      },
      creationDate: {
        type: DataTypes.DATE
      },
      createdBy: {
        type: DataTypes.UUID
      },
      lastModified: {
        type: DataTypes.DATE
      },
      lastModifiedBy: {
        type: DataTypes.UUID
      },
      lastDeployed: {
        type: DataTypes.DATE
      }
    },
    {
      freezeTableName: true,
      timestamps: false,
      tableName: "clients"
    }
  );

  Client.associate = function (models) {
    Client.hasMany(models.AdvancedSettingClient, {
      foreignKey: "client_id",
      onDelete: "CASCADE",
      hooks: true
    });

    Client.hasMany(models.ClientStatus, {
      foreignKey: "client_id",
      onDelete: "CASCADE",
      hooks: true
    });

    Client.hasMany(models.AttributeMapping, {
      foreignKey: "client_id",
      onDelete: "CASCADE",
      hooks: true
    });

    Client.hasMany(models.Metadata, {
      foreignKey: "client_id",
      onDelete: "CASCADE",
      hooks: true
    });
  };

  return Client;
};
