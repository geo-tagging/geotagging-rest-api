const models = require("../models");
const Sequelize = require("sequelize");

function getAllOption(req, res) {
  Promise.all([
    models.tb_jenis.findAll(),
    models.tb_kegiatan.findAll(),
    models.tb_lokasi.findAll(),
    models.tb_sk.findAll(),
    models.tb_status.findAll(),
    models.tb_action.findAll(),
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
