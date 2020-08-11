const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const groupsRoutes = require("./routes/groups-routes");
const clientsRoutes = require("./routes/clients-routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/groups/", groupsRoutes);
app.use("/api/clients/", clientsRoutes);

app.use(cors);
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;
