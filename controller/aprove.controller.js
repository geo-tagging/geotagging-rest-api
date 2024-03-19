const models = require("../models");
const Sequelize = require("sequelize");

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

module.exports = {
  createNewTag,
  getAllTag,
  searchTags,
};
