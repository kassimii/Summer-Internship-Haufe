const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres://user:1234@localhost:3000/haufe");

const groupRoutes = require("./routes/group-routes");

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/groups", groupRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
