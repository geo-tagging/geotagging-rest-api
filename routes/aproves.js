const express = require("express");
const aproveController = require("../controller/aprove.controller");
const router = express.Router();

router.post("/", aproveController.createNewTag);
router.get("/", aproveController.getAllTag);
router.get("/search", aproveController.searchTags);

module.exports = router;
