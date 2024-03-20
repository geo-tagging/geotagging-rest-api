const express = require("express");
const aproveController = require("../controller/aprove.controller");
const checkAuthMiddleware = require("../middleware/check-auth");
const router = express.Router();

router.post("/", checkAuthMiddleware.checkAuth, aproveController.createNewTag);
router.get("/", checkAuthMiddleware.checkAuth, aproveController.getAllTag);

router.get(
  "/search",
  checkAuthMiddleware.checkAuth,
  aproveController.searchTags
);
router.delete(
  "/:id_aproves",
  checkAuthMiddleware.checkAuth,
  aproveController.deleteTag
);

module.exports = router;
