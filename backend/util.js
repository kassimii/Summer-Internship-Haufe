const jwt = require("jsonwebtoken");
const { config } = require("./config");

const isAuth = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(isAuth);
  if (token) {
    const onlyToken = token.slice(7, token.length);
    jwt.verify(onlyToken, config.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({ message: "Invalid Token" });
      }
      req.user = decode;
      next();
      return;
    });
  } else {
    return res.status(401).send({ message: "Token is not supplied." });
  }
};

module.exports = { isAuth };
