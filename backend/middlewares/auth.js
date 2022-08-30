const { tokenVerifier } = require("../helpers/jsonwebtoken");

const authentication = (req, res, next) => {
  const token = req.headers.token;

  if (token) {
    try {
      let verifyToken = tokenVerifier(token);
      req.userData = verifyToken;
      next();
    } catch (err) {
      req.status(401).json({
        message: "Token not authenticated!",
      });
    }
  } else {
    res.status(404).json({
      message: "Access token not found",
    });
  }
};
module.exports = authentication;
