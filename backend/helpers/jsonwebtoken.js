const jwt = require("jsonwebtoken");
const secretCode = process.env.SECRET_CODE || "secret";

const tokenGenerator = (data) => {
  const { id, username, active } = data;
  return jwt.sign(
    {
      id,
      username,
      active,
    },
    secretCode
  );
};

const tokenVerifier = (data) => {
  return jwt.verify(data, secretCode);
};

module.exports = {
  tokenGenerator,
  tokenVerifier,
};
