const jwt = require("jsonwebtoken");
const { config } = require("./config");

const getToken = (user, admin) => {
  return jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: admin ? true : false
    },
    config.JWT_SECRET,
    {
      expiresIn: "48h"
    }
  );
};

module.exports = { getToken };
