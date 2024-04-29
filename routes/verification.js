const express = require("express");
const verificationController = require("../controller/verification.controller");
const checkAuthMiddleware = require("../middleware/check-auth");
const router = express.Router();

router.post(
  "/",
  // checkAuthMiddleware.checkAuth,
  verificationController.createNewVerification
);

router.get(
  "/tag",
  // checkAuthMiddleware.checkAuth,
  verificationController.getAllHistory
);

router.get(
  "/search",
  // checkAuthMiddleware.checkAuth,
  verificationController.searchHistory
);

router.patch(
  "/:id_verification",
  // checkAuthMiddleware.checkAuth,
  verificationController.editVerificationAction
);

module.exports = router;
