const express = require("express");
const verificationController = require("../controller/verification.controller");
const imageUploader = require("../helper/image-uploader");
const checkAuthMiddleware = require("../middleware/check-auth");
const router = express.Router();

router.post(
  "/",
  checkAuthMiddleware.checkAuth,
  imageUploader.upload.single("image"),
  verificationController.createNewVerification
);

router.get(
  "/",
  checkAuthMiddleware.checkAuth,
  verificationController.getAllHistory
);

router.get(
  "/search",
  checkAuthMiddleware.checkAuth,
  verificationController.searchHistory
);

router.patch(
  "/:id_verification",
  checkAuthMiddleware.checkAuth,
  verificationController.editVerificationAction
);

module.exports = router;