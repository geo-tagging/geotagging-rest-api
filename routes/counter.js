const express = require("express");
const counterController = require("../controller/counter.controller");
const checkAuthMiddleware = require("../middleware/check-auth");
const router = express.Router();

router.get(
  "/:id",
  // checkAuthMiddleware.checkAuth,
  counterController.getCounter
);

router.patch(
  "/:id",
  // checkAuthMiddleware.checkAuth,
  counterController.updateCounter
);

module.exports = router;
