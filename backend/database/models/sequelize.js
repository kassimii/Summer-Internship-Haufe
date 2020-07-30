const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "postgres://user:1234@localhost:3001/haufe"
);

module.exports = sequelize;
