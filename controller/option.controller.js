const models = require("../models");
const Sequelize = require("sequelize");
const validator = require("fastest-validator");

function getAllOption(req, res) {
  Promise.all([
    models.tb_jenis.findAll({ order: [["nama", "ASC"]] }),
    models.tb_kegiatan.findAll({ order: [["kegiatan", "ASC"]] }),
    models.tb_lokasi.findAll({ order: [["lokasi", "ASC"]] }),
    models.tb_sk.findAll({ order: [["skppkh", "ASC"]] }),
    models.tb_status.findAll({ order: [["status", "ASC"]] }),
    models.tb_action.findAll({ order: [["action", "ASC"]] }),
  ])
    .then(
      ([
        resultJenis,
        resultKegiatan,
        resultLokasi,
        resultSK,
        resultStatus,
        resultAction,
      ]) => {
        res.status(200).json({
          message: "Get All Options Successfully",
          tb_jenis: resultJenis,
          tb_kegiatan: resultKegiatan,
          tb_lokasi: resultLokasi,
          tb_sk: resultSK,
          tb_status: resultStatus,
          tb_action: resultAction,
        });
      }
    )
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        message: "Something went wrong",
        error: error.message,
      });
    });
}

function createNewOptionJenis(req, res) {
  const jenis = {
    nama: req.body.nama,
    kategori: req.body.kategori,
  };

  const schema = {
    nama: { type: "string", optional: false },
    kategori: { type: "string", optional: false },
  };

  const v = new validator();
  const validationResponse = v.validate(jenis, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation failed",
      error: validationResponse,
    });
  }

  models.tb_jenis
    .create(jenis)
    .then((result) => {
      res.status(201).json({
        message: "New Plant Option Create Successfully",
        post: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
        error: error,
      });
    });
}

function createNewOptionLokasi(req, res) {
  const lokasi = {
    lokasi: req.body.lokasi,
    region: req.body.region,
    kecamatan: req.body.kecamatan,
  };

  const schema = {
    lokasi: { type: "string", optional: false },
    region: { type: "string", optional: false },
    kecamatan: { type: "string", optional: false },
  };

  const v = new validator();
  const validationResponse = v.validate(lokasi, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation failed",
      error: validationResponse,
    });
  }

  models.tb_lokasi
    .create(lokasi)
    .then((result) => {
      res.status(201).json({
        message: "New Location Option Create Successfully",
        post: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
        error: error,
      });
    });
}

function createNewOptionSK(req, res) {
  const skppkh = {
    skppkh: req.body.skppkh,
  };

  const schema = {
    skppkh: { type: "string", optional: false },
  };

  const v = new validator();
  const validationResponse = v.validate(skppkh, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation failed",
      error: validationResponse,
    });
  }

  models.tb_sk
    .create(skppkh)
    .then((result) => {
      res.status(201).json({
        message: "New skppkh Option Create Successfully",
        post: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
        error: error,
      });
    });
}

function createNewOptionKegiatan(req, res) {
  const kegiatan = {
    kegiatan: req.body.kegiatan,
  };

  const schema = {
    kegiatan: { type: "string", optional: false },
  };

  const v = new validator();
  const validationResponse = v.validate(kegiatan, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation failed",
      error: validationResponse,
    });
  }

  models.tb_kegiatan
    .create(kegiatan)
    .then((result) => {
      res.status(201).json({
        message: "New Activity Option Create Successfully",
        post: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
        error: error,
      });
    });
}

module.exports = {
  getAllOption,
  createNewOptionJenis,
  createNewOptionLokasi,
  createNewOptionSK,
  createNewOptionKegiatan,
};
