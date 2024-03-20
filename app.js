const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const aprovesRoutes = require("./routes/aproves");
const userRoutes = require("./routes/user");

app.use(bodyParser.json());
app.use("/aproves", aprovesRoutes);
app.use("/user", userRoutes);

module.exports = app;
