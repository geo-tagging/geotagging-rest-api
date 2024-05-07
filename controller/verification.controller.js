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
    return res.status(422).json({
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
  const orderBy = req.query.orderBy;
  const sortBy = req.query.sortBy;

  models.tb_verification
    .findAll({
      attributes: [
        "id_verification",
        "id_tanaman",
        "id_jenis",
        [Sequelize.col("tb_jeni.nama"), "nama"],
        [Sequelize.col("tb_jeni.kategori"), "kategori"],
        "id_kegiatan",
        [Sequelize.col("tb_kegiatan.kegiatan"), "kegiatan"],
        "id_lokasi",
        [Sequelize.col("tb_lokasi.lokasi"), "lokasi"],
        "id_sk",
        [Sequelize.col("tb_sk.skppkh"), "skppkh"],
        "id_status",
        [Sequelize.col("tb_status.status"), "status"],
        "diameter",
        "tinggi",
        "tanggal_tanam",
        "date_modified",
        "latitude",
        "longitude",
        "elevasi",
        "easting",
        "northing",
        "images",
        "id_action",
        [Sequelize.col("tb_action.action"), "action"],
        "uid",
        [Sequelize.col("tb_user.username"), "username"],
      ],
      include: [
        {
          model: models.tb_jenis,
          attributes: [],
        },
        {
          model: models.tb_kegiatan,
          attributes: [],
        },
        {
          model: models.tb_lokasi,
          attributes: [],
        },
        {
          model: models.tb_sk,
          attributes: [],
        },
        {
          model: models.tb_status,
          attributes: [],
        },
        {
          model: models.tb_action,
          attributes: [],
        },
        {
          model: models.tb_user,
          attributes: [],
        },
      ],
      order: [[orderBy, sortBy]],
    })
    .then((result) => {
      res.status(200).json({
        message: "Get All History Successfully",
        data: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
        error: error.message,
      });
    });
}

function searchHistory(req, res) {
  const orderBy = req.query.orderBy;
  const sortBy = req.query.sortBy;
  const keyword = req.query.keyword;

  models.tb_verification
    .findAll({
      attributes: [
        "id_verification",
        "id_tanaman",
        "id_jenis",
        [Sequelize.col("tb_jeni.nama"), "nama"],
        [Sequelize.col("tb_jeni.kategori"), "kategori"],
        "id_kegiatan",
        [Sequelize.col("tb_kegiatan.kegiatan"), "kegiatan"],
        "id_lokasi",
        [Sequelize.col("tb_lokasi.lokasi"), "lokasi"],
        "id_sk",
        [Sequelize.col("tb_sk.skppkh"), "skppkh"],
        "id_status",
        [Sequelize.col("tb_status.status"), "status"],
        "diameter",
        "tinggi",
        "tanggal_tanam",
        "date_modified",
        "latitude",
        "longitude",
        "elevasi",
        "easting",
        "northing",
        "images",
        "id_action",
        [Sequelize.col("tb_action.action"), "action"],
        "uid",
        [Sequelize.col("tb_user.username"), "username"],
      ],
      include: [
        {
          model: models.tb_jenis,
          attributes: [],
        },
        {
          model: models.tb_kegiatan,
          attributes: [],
        },
        {
          model: models.tb_lokasi,
          attributes: [],
        },
        {
          model: models.tb_sk,
          attributes: [],
        },
        {
          model: models.tb_status,
          attributes: [],
        },
        {
          model: models.tb_action,
          attributes: [],
        },
        {
          model: models.tb_user,
          attributes: [],
        },
      ],
      where: {
        [Sequelize.Op.or]: [
          Sequelize.where(Sequelize.col("id_tanaman"), {
            [Sequelize.Op.like]: `%${keyword}%`,
          }),
          Sequelize.where(Sequelize.col("tb_jeni.nama"), {
            [Sequelize.Op.like]: `%${keyword}%`,
          }),
          Sequelize.where(Sequelize.col("tb_kegiatan.kegiatan"), {
            [Sequelize.Op.like]: `%${keyword}%`,
          }),
          Sequelize.where(Sequelize.col("tb_lokasi.lokasi"), {
            [Sequelize.Op.like]: `%${keyword}%`,
          }),
          Sequelize.where(Sequelize.col("tb_sk.skppkh"), {
            [Sequelize.Op.like]: `%${keyword}%`,
          }),
          Sequelize.where(Sequelize.col("tb_status.status"), {
            [Sequelize.Op.like]: `%${keyword}%`,
          }),
          Sequelize.where(Sequelize.col("tb_action.action"), {
            [Sequelize.Op.like]: `%${keyword}%`,
          }),
          Sequelize.where(Sequelize.col("tb_user.username"), {
            [Sequelize.Op.like]: `%${keyword}%`,
          }),
          Sequelize.where(Sequelize.col("tanggal_tanam"), {
            [Sequelize.Op.like]: `%${keyword}%`,
          }),
        ],
      },
      order: [[orderBy, sortBy]],
    })
    .then((result) => {
      res.status(200).json({
        message: "Search Result",
        data: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
        error: error.message,
      });
    });
}

function editVerificationAction(req, res) {
  const id_verification = req.params.id_verification;
  const newIdAction = req.body.id_action;

  // Validasi id_action
  if (![1, 2, 3, 4].includes(newIdAction)) {
    return res.status(400).json({
      message: "Invalid verification option",
    });
  }

  models.tb_verification
    .findByPk(id_verification)
    .then((verification) => {
      if (!verification) {
        return res.status(400).json({
          message: "Verification not found",
        });
      }

      // Update id_action pada data verifikasi
      verification
        .update({ id_action: newIdAction })
        .then(() => {
          return res.status(200).json({
            message: "Verification data successfully",
          });
        })
        .catch((error) => {
          return res.status(400).json({
            message: "Failed to verification data",
            error: error,
          });
        });

      // Jika id_action diubah menjadi 2 (approved)
      if (newIdAction === 2) {
        // Periksa apakah data sudah ada di tb_approve
        models.tb_approve
          .findOne({ where: { id_tanaman: verification.id_tanaman } })
          .then((existingApprove) => {
            if (!existingApprove) {
              // Jika tidak ada, tambahkan ke tb_approve
              models.tb_approve.create(verification.dataValues);
            } else {
              // Jika sudah ada, lakukan pembaruan (update)
              existingApprove.update(verification.dataValues);
            }
          });
      }
    })
    .catch((error) => {
      return res.status(500).json({
        message: "Something went wrong",
        error: error.message,
      });
    });
}

module.exports = {
  createNewVerification,
  getAllHistory,
  searchHistory,
  editVerificationAction,
};
