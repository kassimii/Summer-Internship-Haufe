//require("dotenv").config();

module.exports = {
  development: {
    url: "postgres://user:1234@localhost:5432/haufe",
    dialect: "postgres",
  },
  test: {
    url: " postgres://user:1234@localhost:5432/haufe",
    dialect: "postgres",
  },
};
