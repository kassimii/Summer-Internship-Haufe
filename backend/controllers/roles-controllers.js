const { getToken, isAuth } = require("../util");
const express = require("express");
const { Op } = require("sequelize");
const models = require("../database/models");

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
  console.log(req.body);
  const signinUser = await models.User.findOne({
    where: {
      emailAddress: {
        [Op.eq]: req.body.email
      }
    }
  });
  if (signinUser) {
    const admin = await models.Admin.findAll({
      where: { emailAddress: { [Op.eq]: req.body.email } }
    });
    res.status(200).json({
      user: {
        id: signinUser.id,
        firstName: signinUser.firstName,
        lastName: signinUser.lastName,
        email: signinUser.emailAddress,
        isAdmin: admin ? true : false,
        token: getToken(signinUser, admin)
      }
    });
  } else {
    res.status(401).json({ message: "Invalid email" });
  }
};

exports.signin = signin;
exports.getAdminByEmail = getAdminByEmail;
