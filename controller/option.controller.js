const models = require("../models");
const Sequelize = require("sequelize");

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

module.exports = {
  getAllOption,
};
