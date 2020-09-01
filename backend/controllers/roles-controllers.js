const { isAuth } = require("../util");
const express = require("express");
const { Op } = require("sequelize");
const models = require("../database/models");
const jwt = require("jsonwebtoken");
const { config } = require("../config");

const getAdminByEmail = async (req, res) => {
  try {
    const admin = await models.Admin.findAll({
      where: { emailAddress: { [Op.eq]: req.body.email } }
    });
    return res.status(200).json({ admin });
  } catch (err) {
    return res.status(404).json({ error: err });
  }
};

const signin = async (req, res) => {
  var decoded;
  try {
    decoded = jwt.verify(req.body.jwtKey, config.JWT_SECRET);
    console.log(decoded);
    const signinUser = await models.User.findOne({
      where: {
        emailAddress: {
          [Op.eq]: decoded.email
        }
      }
    });
    if (signinUser) {
      const admin = await models.Admin.findOne({
        where: { emailAddress: { [Op.eq]: decoded.email } }
      });
      res.status(200).json({
        user: {
          id: signinUser.id,
          firstName: signinUser.firstName,
          lastName: signinUser.lastName,
          email: signinUser.emailAddress,
          isAdmin: admin ? true : false,
          claims: decoded.claims,
          token: req.body.jwtKey
        }
      });
    } else {
      res.status(401).json({ message: "Invalid email" });
    }
  } catch (err) {
    return res.status(404).json({ error: err });
  }
};

exports.signin = signin;
exports.getAdminByEmail = getAdminByEmail;
