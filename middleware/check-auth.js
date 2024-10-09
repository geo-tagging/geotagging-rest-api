require("dotenv").config();
const jwt = require("jsonwebtoken");

function checkAuth(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodeToken = jwt.verify(token, process.env.JWT_KEY);
    req.userData = decodeToken;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      // Token expired
      return res.status(401).json({
        message: "Session expired, please login again",
      });
    } else {
      // Other token validation errors
      return res.status(401).json({
        message: "Invalid token provided!",
        error: error,
      });
    }
  }
}

module.exports = {
  checkAuth,
};
