const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const groupRoutes = require("./routes/groups-routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/groups/", groupRoutes);

app.use(cors);
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;
