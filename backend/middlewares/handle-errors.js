const { validationResult } = require("express-validator");

module.exports = {
  handleErrors(req, res, next) {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
};
