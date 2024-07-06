require("dotenv").config();
const models = require("../models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

function signUp(req, res) {
  models.tb_user
    .findOne({ where: { email: req.body.email } })
    .then((result) => {
      if (result) {
        res.status(409).json({
          message: "Email already exists!",
        });
      } else {
        bcryptjs.genSalt(10, function (err, salt) {
          bcryptjs.hash(req.body.password, salt, function (err, hash) {
            const user = {
              email: req.body.email,
              username: req.body.username,
              password: hash,
              role: req.body.role,
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

function loginUser(req, res) {
  models.tb_user
    .findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (user === null) {
        res.status(401).json({
          message: "Invalid credentials!",
        });
      } else {
        bcryptjs.compare(
          req.body.password,
          user.password,
          function (err, result) {
            if (result) {
              const token = jwt.sign(
                {
                  email: user.email,
                  uid: user.uid,
                  role: user.role,
                },
                process.env.JWT_KEY,
                {
                  expiresIn: "3d", // Token kedaluwarsa setelah 3 hari
                },
                function (err, token) {
                  if (user.role === "admin" || user.role === "developer") {
                    res.status(403).json({
                      message: "Admin login not allowed here!",
                    });
                  } else {
                    res.status(200).json({
                      message: "User authentication successful!",
                      token: token,
                      uid: user.uid,
                    });
                  }
                }
              );
            } else {
              res.status(401).json({
                message: "Invalid credentials!",
              });
            }
          }
        );
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Something went wrong!",
      });
    });
}

function loginAdmin(req, res) {
  models.tb_user
    .findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (user === null) {
        res.status(401).json({
          message: "Invalid credentials!",
        });
      } else {
        bcryptjs.compare(
          req.body.password,
          user.password,
          function (err, result) {
            if (result) {
              const token = jwt.sign(
                {
                  email: user.email,
                  uid: user.uid,
                  role: user.role,
                },
                process.env.JWT_KEY,
                {
                  expiresIn: "3d", // Token kedaluwarsa setelah 3 hari
                },
                function (err, token) {
                  if (user.role === "admin" || user.role === "developer") {
                    res.status(200).json({
                      message: "Admin authentication successful!",
                      token: token,
                      uid: user.uid,
                    });
                  } else {
                    res.status(403).json({
                      message: "User login not allowed here!",
                    });
                  }
                }
              );
            } else {
              res.status(401).json({
                message: "Invalid credentials!",
              });
            }
          }
        );
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Something went wrong!",
      });
    });
}

function getAllUsers(req, res) {
  if (req.userData.role !== "admin" || req.userData.role !== "developer") {
    return res.status(403).json({ message: "Unauthorized access" });
  }

  models.tb_user
    .findAll()
    .then((user) => {
      if (user.length === 0) {
        res.status(404).json({
          message: "No users found",
        });
      } else {
        res.status(200).json({
          message: "Users retrieved successfully",
          user: user,
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

function deleteUser(req, res) {
  if (req.userData.role !== "admin" || req.userData.role !== "developer") {
    return res.status(403).json({ message: "Only admin can delete users" });
  }

  const userIdToDelete = req.params.uid;

  models.tb_user
    .destroy({ where: { uid: userIdToDelete } })
    .then((result) => {
      if (result === 1) {
        res.status(200).json({
          message: "User deleted successfully",
        });
      } else {
        res.status(404).json({
          message: "User not found",
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
  loginUser,
  loginAdmin,
  getAllUsers,
  deleteUser,
};
