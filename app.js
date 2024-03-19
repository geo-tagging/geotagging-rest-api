const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const databaseRoutes = require("./routes/aprove");

app.use(bodyParser.json());
app.use("/post", databaseRoutes);

module.exports = app;
