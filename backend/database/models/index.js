const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const db = {};
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "postgres://postgres:1234@localhost:5432/haufetest",
  {
    dialect: "postgres",
  }
);
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize);
    const upperName = model.name[0].toUpperCase() + model.name.slice(1);
    db[upperName] = model;
  });
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
