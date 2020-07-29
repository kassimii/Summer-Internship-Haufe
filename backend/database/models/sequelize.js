const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
  "postgres://user:1234@localhost:3000/haufe"
);

module.exports = sequelize;
