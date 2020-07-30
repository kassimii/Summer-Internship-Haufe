//require("dotenv").config();

module.exports = {
  development: {
    url: " postgres://postgres:1234@localhost:5432/haufetest",
    dialect: "postgres",
  },
  test: {
    url: " postgres://postgres:1234@localhost:5432/haufetest",
    dialect: "postgres",
  },
};
