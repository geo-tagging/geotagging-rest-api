const express = require("express");
const optionController = require("../controller/option.controller");
const router = express.Router();

router.get("/", optionController.getAllOption);

module.exports = router;
