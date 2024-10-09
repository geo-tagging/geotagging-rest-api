const express = require("express");
const optionController = require("../controller/option.controller");
const checkAuthMiddleware = require("../middleware/check-auth");
const router = express.Router();

router.get("/", checkAuthMiddleware.checkAuth, optionController.getAllOption);

router.post(
  "/instansi",
  checkAuthMiddleware.checkAuth,
  optionController.createNewOptionMajor
);

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
  "/petak",
  checkAuthMiddleware.checkAuth,
  optionController.createNewOptionPetak
);

router.post(
  "/sk",
  checkAuthMiddleware.checkAuth,
  optionController.createNewOptionSK
);

router.post(
  "/skkerja",
  checkAuthMiddleware.checkAuth,
  optionController.createNewOptionSkKerja
);

router.post(
  "/status",
  checkAuthMiddleware.checkAuth,
  optionController.createNewOptionStatus
);

router.post(
  "/statusareatanam",
  checkAuthMiddleware.checkAuth,
  optionController.createNewOptionStatusAreaTanam
);

router.post(
  "/kegiatan",
  checkAuthMiddleware.checkAuth,
  optionController.createNewOptionKegiatan
);

module.exports = router;
