const dotenv = require("dotenv");

dotenv.config();

const config = {
  JWT_SECRET: process.env.JWT_SECRET || "somethingsecret"
};

exports.config = config;
