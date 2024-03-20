const models = require("../models");
const bcryptjs = require("bcryptjs");
const je = require("jsonwebtoken");

function signUp(req, res) {
  models.tb_user
    .findOne({ where: { email: req.body.email } })
    .then((result) => {
      if (result) {
        res.status(409).json9({
          message: "Email already exists!",
        });
      } else {
        models.bcryptjs.genSalt(10, function (err, salt) {
          bcryptjs.hash(req.body.password, salt, function (err, hash) {
            const user = {
              email: req.body.email,
              username: req.body.username,
              password: hash,
            };

            models.tb_user
              .create(user)
              .then((result) => {
                res.status(201).json({
                  message: "User Create Successfully",
                });
              })
              .catch((error) => {
                res.status(500).json({
                  message: "Something went wrong",
                  error: error,
                });
              });
          });
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Something went wrong!",
      });
    });
}

module.exports = {
  signUp,
};
