const models = require("../models");
const Sequelize = require("sequelize");
const validator = require("fastest-validator");

function createNewTag(req, res) {
  const aprove = {
    id_jenis: req.body.id_jenis,
    id_kegiatan: req.body.id_kegiatan,
    id_lokasi: req.body.id_lokasi,
    id_sk: req.body.id_sk,
    tanggal_tanam: req.body.tanggal_tanam,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    elevasi: req.body.elevasi,
    images: req.body.images,
    date_modified: req.body.date_modified,
    verification: req.body.verification,
    kondisi: req.body.kondisi,
    uid: req.body.uid,
  };

  const schema = {
    id_jenis: { type: "number", optional: false },
    id_kegiatan: { type: "number", optional: false },
    id_lokasi: { type: "number", optional: false },
    id_sk: { type: "number", optional: false },
    tanggal_tanam: { type: "string", optional: true },
    latitude: { type: "string", optional: true },
    longitude: { type: "string", optional: true },
    elevasi: { type: "string", optional: true },
    images: { type: "string", optional: true },
    date_modified: { type: "string", optional: true },
    verification: { type: "string", optional: true },
    kondisi: { type: "string", optional: true },
    uid: { type: "number", optional: false },
  };

  const v = new validator();
  const validationResponse = v.validate(aprove, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation failed",
      error: validationResponse,
    });
  }

  models.tb_aproves
    .create(aprove)
    .then((result) => {
      res.status(201).json({
        message: "New Tag Create Successfully",
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

function getAllTag(req, res) {
  models.tb_aproves
    .findAll()
    .then((result) => {
      res.status(201).json({
        message: "New Tag Create Successfully",
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

function searchTags(req, res) {
  const keyword = req.query.keyword; // Mengambil kata kunci dari query string
  const sortBy = req.query.sortBy; // Mengambil parameter untuk mengurutkan
  const orderBy = req.query.orderBy; // Mengambil parameter untuk order by

  // Contoh query pencarian dengan Sequelize
  models.tb_aproves
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

function deleteTag(req, res) {
  const id_aproves = req.params.id_aproves;
  const uid = 1;

  models.tb_aproves
    .destroy({ where: { id_aproves: id_aproves, uid: uid } })
    .then((result) => {
      res.status(200).json({
        message: "Post deleted successfully",
      });
    })
    .catch((error) => {
      res.status(200).json({
        message: "Something went wrong",
        error: error,
      });
    });
}

module.exports = {
  createNewTag,
  getAllTag,
  searchTags,
  deleteTag,
};
