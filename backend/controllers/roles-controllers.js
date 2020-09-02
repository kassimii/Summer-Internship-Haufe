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
    let accesibileClaims = await models.Claim.findAll({
      where: { claim: { [Op.in]: decoded.claims } }
    });
    accesibileClaims = accesibileClaims.map((claim) => claim.group_id);
    if (accesibileClaims.length === 0) {
      res.status(401).json({ message: "Bad Claims" });
    }
    const accesibileGroups = await models.Group.findAll({
      where: { id: { [Op.in]: accesibileClaims } }
    });
    let signinUser = await models.User.findOne({
      where: {
        emailAddress: {
          [Op.eq]: decoded.email
        }
      }
    });
    if (accesibileGroups && !signinUser) {
      signinUser = await models.User.create({
        emailAddress: decoded.email,
        firstName: decoded.firstName,
        lastName: decoded.lastName
      });
    }
    if (signinUser) {
      signinUser.lastLoginDate = new Date().toISOString();
      await signinUser.save({ fields: ["lastLoginDate"] });
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
          groups: accesibileGroups,
          token: req.body.jwtKey
        }
      });
    } else {
      res.status(401).json({ message: "Invalid email" });
    }
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

exports.signin = signin;
exports.getAdminByEmail = getAdminByEmail;
