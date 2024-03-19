const models = require("../models");

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

module.exports = {
  createNewTag,
  getAllTag,
};
