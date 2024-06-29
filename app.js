// app.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

const optionRoutes = require("./routes/option");
const verificationRoutes = require("./routes/verification");
const approveRoutes = require("./routes/approve");
const userRoutes = require("./routes/user");
const imageRoutes = require("./routes/image");
const counterRoutes = require("./routes/counter");

app.use(bodyParser.json());

app.use("/option", optionRoutes);
app.use("/verification", verificationRoutes);
app.use("/approve", approveRoutes);
app.use("/user", userRoutes);
app.use("/image", imageRoutes);
app.use("/counter", counterRoutes);

module.exports = app;
