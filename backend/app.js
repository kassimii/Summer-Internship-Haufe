const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const groupsRoutes = require("./routes/groups-routes");
const clientsRoutes = require("./routes/clients-routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/groups/", groupsRoutes);
app.use("/api/clients/", clientsRoutes);

app.use(cors);

module.exports = app;
