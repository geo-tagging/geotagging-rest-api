const express = require("express");
const userController = require("../controller/users.controller");
const checkAuthMiddleware = require("../middleware/check-auth");
const router = express.Router();

router.post("/sign-up", checkAuthMiddleware.checkAuth, userController.signUp);

router.post("/loginAdmin", userController.loginAdmin);

router.post("/loginUser", userController.loginUser);

router.get("/", checkAuthMiddleware.checkAuth, userController.getAllUsers);

router.delete(
  "/:uid",
  checkAuthMiddleware.checkAuth,
  userController.deleteUser
);

router.post(
  "/request-password-reset",
  checkAuthMiddleware.checkAuth,
  userController.requestPasswordReset
);

router.post("/reset-password", userController.resetPassword);

module.exports = router;
