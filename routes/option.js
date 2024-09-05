const express = require("express");
const optionController = require("../controller/option.controller");
const checkAuthMiddleware = require("../middleware/check-auth");
const router = express.Router();

router.get("/", checkAuthMiddleware.checkAuth, optionController.getAllOption);

router.post(
  "/jenis",
  checkAuthMiddleware.checkAuth,
  optionController.createNewOptionJenis
);

router.post(
  "/lokasi",
  checkAuthMiddleware.checkAuth,
  optionController.createNewOptionLokasi
);

router.post(
  "/sk",
  checkAuthMiddleware.checkAuth,
  optionController.createNewOptionSK
);

router.post(
  "/kegiatan",
  checkAuthMiddleware.checkAuth,
  optionController.createNewOptionKegiatan
);

module.exports = router;
