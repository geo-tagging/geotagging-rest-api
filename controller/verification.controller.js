const models = require("../models");
const Sequelize = require("sequelize");
const validator = require("fastest-validator");

function createNewVerification(req, res) {
  const verification = {
    id_tanaman: req.body.id_tanaman,
    id_jenis: req.body.id_jenis,
    id_kegiatan: req.body.id_kegiatan,
    id_lokasi: req.body.id_lokasi,
    id_sk: req.body.id_sk,
    id_status: req.body.id_status,
    diameter: req.body.diameter,
    tinggi: req.body.tinggi,
    tanggal_tanam: req.body.tanggal_tanam,
    date_modified: req.body.date_modified,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    elevasi: req.body.elevasi,
    easting: req.body.easting,
    northing: req.body.northing,
    images: req.body.images,
    id_action: req.body.id_action,
    uid: req.body.uid,
  };

  const schema = {
    id_tanaman: { type: "number", optional: false },
    id_jenis: { type: "number", optional: false },
    id_kegiatan: { type: "number", optional: false },
    id_lokasi: { type: "number", optional: false },
    id_sk: { type: "number", optional: false },
    id_status: { type: "number", optional: false },
    diameter: { type: "number", optional: false },
    tinggi: { type: "number", optional: false },
    tanggal_tanam: { type: "string", optional: true },
    date_modified: { type: "string", optional: true },
    latitude: { type: "string", optional: true },
    longitude: { type: "string", optional: true },
    elevasi: { type: "string", optional: true },
    easting: { type: "string", optional: false },
    northing: { type: "string", optional: false },
    images: { type: "string", optional: true },
    verification: { type: "string", optional: true },
    id_action: { type: "number", optional: false },
    uid: { type: "number", optional: false },
  };

  const v = new validator();
  const validationResponse = v.validate(verification, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation failed",
      error: validationResponse,
    });
  }

  models.tb_verification
    .create(verification)
    .then((result) => {
      res.status(201).json({
        message: "Unverified Tag Create Successfully",
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

function getAllHistory(req, res) {
  models.tb_verification
    .findAll()
    .then((result) => {
      res.status(201).json({
        message: "Get All History Successfully",
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

function searchHistory(req, res) {
  const keyword = req.query.keyword; // Mengambil kata kunci dari query string
  const sortBy = req.query.sortBy; // Mengambil parameter untuk mengurutkan
  const orderBy = req.query.orderBy; // Mengambil parameter untuk order by

  // Contoh query pencarian dengan Sequelize
  models.tb_approve
    .findAll({
      where: {
        // Menggunakan operator LIKE untuk mencocokkan kata kunci dengan kolom tertentu
        [Sequelize.Op.or]: [
          { id_jenis: { [Sequelize.Op.like]: `%${keyword}%` } },
          { id_kegiatan: { [Sequelize.Op.like]: `%${keyword}%` } },
          // Tambahkan kolom-kolom lain yang ingin dijadikan kriteria pencarian
        ],
      },
      order: [
        // Mengatur pengurutan dan order by berdasarkan parameter yang diberikan
        [sortBy, orderBy],
      ],
    })
    .then((result) => {
      res.status(200).json({
        message: "Search results",
        data: result,
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
  createNewVerification,
  getAllHistory,
  searchHistory,
};
