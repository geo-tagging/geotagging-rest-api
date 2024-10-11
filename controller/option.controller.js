const models = require("../models");
const Sequelize = require("sequelize");
const validator = require("fastest-validator");

function getAllOption(req, res) {
  Promise.all([
    models.tb_majorArea.findAll({ order: [["instansi", "ASC"]] }),
    models.tb_jenis.findAll({ order: [["nama", "ASC"]] }),
    models.tb_kegiatan.findAll({ order: [["kegiatan", "ASC"]] }),
    models.tb_lokasi.findAll({ order: [["lokasi", "ASC"]] }),
    models.tb_petakUkur.findAll({ order: [["petak_ukur", "ASC"]] }),
    models.tb_sk.findAll({ order: [["skppkh", "ASC"]] }),
    models.tb_skKerja.findAll({ order: [["sk_kerja", "ASC"]] }),
    models.tb_status.findAll({ order: [["status", "ASC"]] }),
    models.tb_statusAreaTanam.findAll({ order: [["status_areaTanam", "ASC"]] }),
    models.tb_action.findAll({ order: [["action", "ASC"]] }),
  ])
    .then(
      ([
        resultMajorArea,
        resultJenis,
        resultKegiatan,
        resultLokasi,
        resulPetakUkur,
        resultSK,
        resultSkKerja,
        resultStatus,
        resultstatusAreaTanam,
        resultAction,
      ]) => {
        res.status(200).json({
          message: "Get All Options Successfully",
          tb_majorArea: resultMajorArea,
          tb_jenis: resultJenis,
          tb_kegiatan: resultKegiatan,
          tb_lokasi: resultLokasi,
          tb_petakUkur: resulPetakUkur,
          tb_sk: resultSK,
          tb_skKerja: resultSkKerja,
          tb_status: resultStatus,
          tb_statusAreaTanam: resultstatusAreaTanam,
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

function createNewOptionMajor(req, res) {
  const instansi = {
    instansi: req.body.instansi,
    counter: 0,
  };

  const schema = {
    instansi: { type: "string", optional: false },
    counter: { type: "number", optional: false },
  };

  const v = new validator();
  const validationResponse = v.validate(instansi, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation failed",
      error: validationResponse,
    });
  }

  models.tb_majorArea
    .findOne({ where: { instansi: instansi.instansi } })
    .then((existingInstansi) => {
      if (existingInstansi) {
        return res.status(400).json({
          message: "Instansi already exists",
        });
      }

      return models.tb_majorArea.create(instansi);
    })
    .then((result) => {
      if (result) {
        return res.status(201).json({
          message: "New Instansi Option Created Successfully",
          post: result,
        });
      }
    })
    .catch((error) => {
      if (!res.headersSent) {
        return res.status(500).json({
          message: "Something went wrong",
          error: error,
        });
      }
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
    .findOne({ where: { nama: jenis.nama } })
    .then((existingJenis) => {
      if (existingJenis) {
        return res.status(400).json({
          message: "Plant already exists",
        });
      }

      return models.tb_jenis.create(jenis);
    })
    .then((result) => {
      if (result) {
        return res.status(201).json({
          message: "New Plant Option Created Successfully",
          post: result,
        });
      }
    })
    .catch((error) => {
      if (!res.headersSent) {
        return res.status(500).json({
          message: "Something went wrong",
          error: error,
        });
      }
    });
}

function createNewOptionLokasi(req, res) {
  const lokasi = {
    lokasi: req.body.lokasi,
    region: req.body.region,
    kecamatan: req.body.kecamatan,
    id_major: req.body.id_major,
  };

  const schema = {
    lokasi: { type: "string", optional: false },
    region: { type: "string", optional: false },
    kecamatan: { type: "string", optional: false },
    id_major: { type: "number", optional: false },
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
    .findOne({ where: { lokasi: lokasi.lokasi } })
    .then((existingLokasi) => {
      if (existingLokasi) {
        return res.status(400).json({
          message: "Location already exists",
        });
      }

      return models.tb_lokasi.create(lokasi);
    })
    .then((result) => {
      if (result) {
        return res.status(201).json({
          message: "New Location Option Created Successfully",
          post: result,
        });
      }
    })
    .catch((error) => {
      if (!res.headersSent) {
        return res.status(500).json({
          message: "Something went wrong",
          error: error,
        });
      }
    });
}

function createNewOptionPetak(req, res) {
  const petak_ukur = {
    petak_ukur: req.body.petak_ukur,
    id_lokasi: req.body.id_lokasi,
  };

  const schema = {
    petak_ukur: { type: "string", optional: false },
    id_lokasi: { type: "number", optional: false },
  };

  const v = new validator();
  const validationResponse = v.validate(petak_ukur, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation failed",
      error: validationResponse,
    });
  }

  models.tb_petakUkur
    .findOne({ where: { petak_ukur: petak_ukur.petak_ukur } })
    .then((existingPetakUkur) => {
      if (existingPetakUkur) {
        return res.status(400).json({
          message: "Petak Ukur already exists",
        });
      }

      return models.tb_petakUkur.create(petak_ukur);
    })
    .then((result) => {
      if (result) {
        return res.status(201).json({
          message: "New Petak Ukur Option Created Successfully",
          post: result,
        });
      }
    })
    .catch((error) => {
      if (!res.headersSent) {
        return res.status(500).json({
          message: "Something went wrong",
          error: error,
        });
      }
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
    .findOne({ where: { skppkh: skppkh.skppkh } })
    .then((existingSkppkh) => {
      if (existingSkppkh) {
        return res.status(400).json({
          message: "SKPPKH already exists",
        });
      }

      return models.tb_sk.create(skppkh);
    })
    .then((result) => {
      if (result) {
        return res.status(201).json({
          message: "New SK Option Created Successfully",
          post: result,
        });
      }
    })
    .catch((error) => {
      if (!res.headersSent) {
        return res.status(500).json({
          message: "Something went wrong",
          error: error,
        });
      }
    });
}

function createNewOptionSkKerja(req, res) {
  const sk_kerja = {
    sk_kerja: req.body.sk_kerja,
  };

  const schema = {
    sk_kerja: { type: "string", optional: false },
  };

  const v = new validator();
  const validationResponse = v.validate(sk_kerja, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation failed",
      error: validationResponse,
    });
  }

  models.tb_skKerja
    .findOne({ where: { sk_kerja: sk_kerja.sk_kerja } })
    .then((existingSkKerja) => {
      if (existingSkKerja) {
        return res.status(400).json({
          message: "SK Kawasan Kerja already exists",
        });
      }

      return models.tb_skKerja.create(sk_kerja);
    })
    .then((result) => {
      if (result) {
        return res.status(201).json({
          message: "New SK Kawasan Kerja Option Created Successfully",
          post: result,
        });
      }
    })
    .catch((error) => {
      if (!res.headersSent) {
        return res.status(500).json({
          message: "Something went wrong",
          error: error,
        });
      }
    });
}

function createNewOptionStatus(req, res) {
  const status = {
    status: req.body.status,
  };

  const schema = {
    status: { type: "string", optional: false },
  };

  const v = new validator();
  const validationResponse = v.validate(status, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation failed",
      error: validationResponse,
    });
  }

  models.tb_status
    .findOne({ where: { status: status.status } })
    .then((existingStatus) => {
      if (existingStatus) {
        return res.status(400).json({
          message: "Status already exists",
        });
      }

      return models.tb_status.create(status);
    })
    .then((result) => {
      if (result) {
        return res.status(201).json({
          message: "New Status Option Created Successfully",
          post: result,
        });
      }
    })
    .catch((error) => {
      if (!res.headersSent) {
        return res.status(500).json({
          message: "Something went wrong",
          error: error,
        });
      }
    });
}

function createNewOptionStatusAreaTanam(req, res) {
  const status_areaTanam = {
    status_areaTanam: req.body.status_areaTanam,
  };

  const schema = {
    status_areaTanam: { type: "string", optional: false },
  };

  const v = new validator();
  const validationResponse = v.validate(status_areaTanam, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation failed",
      error: validationResponse,
    });
  }

  models.tb_statusAreaTanam
    .findOne({ where: { status_areaTanam: status_areaTanam.status_areaTanam } })
    .then((existingStatusAreaTanam) => {
      if (existingStatusAreaTanam) {
        return res.status(400).json({
          message: "Status Area Tanam already exists",
        });
      }

      return models.tb_statusAreaTanam.create(status_areaTanam);
    })
    .then((result) => {
      if (result) {
        return res.status(201).json({
          message: "New Status Area Tanam Option Created Successfully",
          post: result,
        });
      }
    })
    .catch((error) => {
      if (!res.headersSent) {
        return res.status(500).json({
          message: "Something went wrong",
          error: error,
        });
      }
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
    .findOne({ where: { kegiatan: kegiatan.kegiatan } })
    .then((existingStatusAreaTanam) => {
      if (existingStatusAreaTanam) {
        return res.status(400).json({
          message: "Kegiatan already exists",
        });
      }

      return models.tb_kegiatan.create(kegiatan);
    })
    .then((result) => {
      if (result) {
        return res.status(201).json({
          message: "New Kegiatan Option Created Successfully",
          post: result,
        });
      }
    })
    .catch((error) => {
      if (!res.headersSent) {
        return res.status(500).json({
          message: "Something went wrong",
          error: error,
        });
      }
    });
}

module.exports = {
  getAllOption,
  createNewOptionMajor,
  createNewOptionJenis,
  createNewOptionLokasi,
  createNewOptionPetak,
  createNewOptionSK,
  createNewOptionSkKerja,
  createNewOptionStatus,
  createNewOptionStatusAreaTanam,
  createNewOptionKegiatan,
};
