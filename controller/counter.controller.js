const models = require("../models");
const Sequelize = require("sequelize");
const validator = require("fastest-validator");

function getCounter(req, res) {
  const id_major = req.params.id_major;

  models.tb_majorArea
    .findByPk(id_major)
    .then((result) => {
      if (result) {
        res.status(200).json({
          message: "Get counter Successfully",
          data: result,
        });
      } else {
        res.status(404).json({
          message: "counter not found!",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
      });
    });
}

function updateCounter(req, res) {
  const id_major = req.params.id_major;

  const updateCounter = {
    counter: req.body.counter,
  };

  const schema = {
    counter: { type: "number", optional: false },
  };

  const v = new validator();
  const validationResponse = v.validate(updateCounter, schema);

  if (validationResponse !== true) {
    return res.status(400).json({
      message: "Validation failed",
      error: validationResponse,
    });
  }

  models.tb_majorArea
    .findOne({ where: { id_major: id_major } })
    .then((counter) => {
      if (!counter) {
        return res.status(404).json({
          message: "counter not found",
        });
      }

      counter
        .update(updateCounter)
        .then((updateCounter) => {
          res.status(201).json({
            message: "Counter updated successfully",
            counter: updateCounter,
          });
        })
        .catch((error) => {
          res.status(500).json({
            message: "Failed to update counter",
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

module.exports = {
  getCounter,
  updateCounter,
};
