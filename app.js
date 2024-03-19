const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const aprovesRoutes = require("./routes/aproves");

app.use(bodyParser.json());
app.use("/aproves", aprovesRoutes);

module.exports = app;
