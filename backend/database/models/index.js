const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const db = {};

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "postgres://user:1234@localhost:3001/haufe",
  {}
);

// fs.readdirSync(__dirname)
//   .filter((file) => {
//     return (
//       file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
//     );
//   })
//   .forEach((file) => {

//     console.log(path.join(__dirname, file));
//     //const model = sequelize["import"](path.join(__dirname, file));
//     //const model = require(path.join(__dirname, file))(sequelize, Sequelize)
//     const model = require(path.join(__dirname, file)).default(sequelize, Sequelize);
//     db[model.name] = model;
//   });

const files = require.context('.', false, /\.js$/)
files.keys().forEach(key => {
  if (key === './index.js') return
  db[key.replace(/(\.\/|\.js)/g, '')] = files(key)(sequelize, Sequelize) // import model
});

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch((err) => {
//     console.error("Unable to connect to the database:", err);
//   });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
