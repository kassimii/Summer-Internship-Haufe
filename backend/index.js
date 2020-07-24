const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const groupsRoter = require("../backend/routes/groups-routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/groups/', groupsRoter);

app.use(cors());

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
