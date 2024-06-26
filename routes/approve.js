const express = require("express");
const aproveController = require("../controller/approve.controller");
const checkAuthMiddleware = require("../middleware/check-auth");
const router = express.Router();

router.post("/", checkAuthMiddleware.checkAuth, aproveController.createNewTag);

router.get("/tag", checkAuthMiddleware.checkAuth, aproveController.getAllTag);

router.get(
  "/tag/:id_tanaman",
  checkAuthMiddleware.checkAuth,
  aproveController.getTagId
);

router.get(
  "/search",
  checkAuthMiddleware.checkAuth,
  aproveController.searchTags
);

router.patch(
  "/:id_tanaman",
  checkAuthMiddleware.checkAuth,
  aproveController.updateTag
);

router.delete(
  "/:id_tanaman",
  checkAuthMiddleware.checkAuth,
  aproveController.deleteTag
);

module.exports = router;
