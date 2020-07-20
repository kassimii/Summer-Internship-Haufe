const {Sequelize, DataTypes, DATE} = require('sequelize');

const Group = sequelize.define('Group', {

    group_id: {
         type: DataTypes.UUID
    },
    name: {
        type: DataTypes.STRING(32)
    },
    creationDate: {
        type: DataTypes.DATE
    },
    createdBy: {
        type: DataTypes.UUID
    }

}, {
    tableName: 'groups'
});
module.exports = Group;
