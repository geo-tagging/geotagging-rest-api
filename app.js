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
const counterRoutes = require("./routes/counter");
const verificationRoutes = require("./routes/verification");
const approveRoutes = require("./routes/approve");
const userRoutes = require("./routes/user");
const imageRoutes = require("./routes/image");

app.use(bodyParser.json());

app.use("/api/option", optionRoutes);
app.use("/api/counter", counterRoutes);
app.use("/api/verification", verificationRoutes);
app.use("/api/approve", approveRoutes);
app.use("/api/user", userRoutes);
app.use("/api/image", imageRoutes);

module.exports = app;
