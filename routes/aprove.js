const express = require("express");
const aproveController = require("../controller/aprove.controller");
const router = express.Router();

router.post("/", aproveController.createNewTag);

module.exports = router;
