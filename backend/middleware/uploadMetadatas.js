const multer = require("multer");

const fileFilter = (req, res, cb) => {
  cb(null, true);
};

var storage = multer.diskStorage({
  destination: (req, file, vb) => {
    cb(null, __basedir + "/resources/static/assets/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-bezkoder-${file.originalname}`);
  }
});

var uploadMetadata = multer({ storage: storage, fileFilter: fileFilter });
module.exports = uploadMetadata;
