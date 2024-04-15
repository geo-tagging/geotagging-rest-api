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

app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

app.use("/option", optionRoutes);
app.use("/verification", verificationRoutes);
app.use("/approve", approveRoutes);
app.use("/user", userRoutes);
app.use("/image", imageRoutes);

module.exports = app;
