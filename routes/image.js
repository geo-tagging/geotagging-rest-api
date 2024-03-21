const express = require("express");
const imageController = require("../controller/image.controller");
const imageUploader = require("../helper/image-uploader");
const checkAuthMiddleware = require("../middleware/check-auth");
const router = express.Router();

router.post(
  "/uploads",
  // checkAuthMiddleware.checkAuth,
  imageUploader.upload.single("image"),
  imageController.upload
);

module.exports = router;
