const { validationResult } = require("express-validator");

module.exports = {
  handleErrors(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ error: errors.array() });
    }
    next();
  }
};
