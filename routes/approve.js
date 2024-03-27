const express = require("express");
const aproveController = require("../controller/approve.controller");
const imageUploader = require("../helper/image-uploader");
const checkAuthMiddleware = require("../middleware/check-auth");
const router = express.Router();

router.post(
  "/",
  checkAuthMiddleware.checkAuth,
  imageUploader.upload.single("image"),
  aproveController.createNewTag
);
router.get("/", checkAuthMiddleware.checkAuth, aproveController.getAllTag);

router.get(
  "/search",
  checkAuthMiddleware.checkAuth,
  aproveController.searchTags
);
router.delete(
  "/:id_tanaman",
  checkAuthMiddleware.checkAuth,
  aproveController.deleteTag
);

module.exports = router;
