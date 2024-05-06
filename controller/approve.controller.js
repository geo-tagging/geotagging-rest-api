const models = require("../models");
const Sequelize = require("sequelize");
const validator = require("fastest-validator");

function createNewTag(req, res) {
  const approve = {
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
  const validationResponse = v.validate(approve, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation failed",
      error: validationResponse,
    });
  }

  models.tb_approve
    .create(approve)
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
  const orderBy = req.query.orderBy;
  const sortBy = req.query.sortBy;

  models.tb_approve
    .findAll({
      attributes: [
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
        message: "Get All Tag Successfully",
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

function getTagId(req, res) {
  const id_tanaman = req.params.id_tanaman;

  models.tb_approve
    .findByPk(id_tanaman, {
      attributes: [
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
    })
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "Get Tag Successfully",
          data: result,
        });
      } else {
        res.status(404).json({
          message: "Tag not found!",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
        error: error.message,
      });
    });
}

function searchTags(req, res) {
  const orderBy = req.query.orderBy;
  const sortBy = req.query.sortBy;
  const keyword = req.query.keyword;

  models.tb_approve
    .findAll({
      attributes: [
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

function updateTag(req, res) {
  const id_tanaman = req.params.id_tanaman;
  const uid = req.userData.uid;
  const role = req.userData.role;

  if (role !== "admin") {
    return res.status(403).json({
      message: "Unauthorized account!",
    });
  }

  const updatedTag = {
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
    uid: uid,
  };

  const schema = {
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
    id_action: { type: "number", optional: false },
    uid: { type: "number", optional: false },
  };

  const v = new validator();
  const validationResponse = v.validate(updatedTag, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation failed",
      error: validationResponse,
    });
  }

  models.tb_approve
    .findOne({ where: { id_tanaman: id_tanaman, uid: uid } })
    .then((tag) => {
      if (!tag) {
        return res.status(404).json({
          message: "Tag not found",
        });
      }

      tag
        .update(updatedTag)
        .then((updatedTag) => {
          res.status(201).json({
            message: "Tag updated successfully",
            tag: updatedTag,
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: "Failed to update tag",
            error: error,
          });
        });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong",
        error: error.message,
      });
    });
}

function deleteTag(req, res) {
  const id_tanaman = req.params.id_tanaman;
  const uid = req.userData.uid;
  const role = req.userData.role;

  if (role !== "admin") {
    return res.status(403).json({
      message: "Unauthorized account!",
    });
  }
  models.tb_approve
    .destroy({ where: { id_tanaman: id_tanaman, uid: uid } })
    .then((result) => {
      res.status(200).json({
        message: "Post deleted successfully",
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
  getTagId,
  searchTags,
  updateTag,
  deleteTag,
};
