const express = require("express");
const userController = require("../controller/users.controller");
const router = express.Router();

router.post("/sign-up", userController.signUp);
router.post("/loginAdmin", userController.loginAdmin);
router.post("/loginUser", userController.loginUser);
router.delete("/:uid", userController.deleteUser);

module.exports = router;
