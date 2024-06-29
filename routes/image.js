// routes/image.js
const express = require("express");
const imageController = require("../controller/image.controller");
const gcsUploader = require("../helper/image-uploader");
const checkAuthMiddleware = require("../middleware/check-auth");
const router = express.Router();

router.post(
  "/uploads",
  // checkAuthMiddleware.checkAuth,
  gcsUploader.multer.single("image"),
  imageController.upload
);

router.get(
  "/uploads/:filename",
  // checkAuthMiddleware.checkAuth,
  imageController.getImage
);

module.exports = router;
