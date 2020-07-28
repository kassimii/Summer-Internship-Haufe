const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const groupsRoter = require("../backend/routes/groups-routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/groups/", groupsRoter);

const groupRoutes = require("./routes/groups-routes");

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/groups", groupRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
