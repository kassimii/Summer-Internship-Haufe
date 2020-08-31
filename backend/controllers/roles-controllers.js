const express = require("express");
const { Op } = require("sequelize");
const models = require("../database/models");

const getAdminByEmail = async (req, res) => {
  console.log(req.body);
  try {
    const admin = await models.Admin.findAll({
      where: { emailAddress: { [Op.eq]: req.body.adminEmail } },
    });
    console.log(admin);
    return res.status(200).json({ admin });
  } catch (err) {
    return res.status(404).json({ error: err });
  }
};

exports.getAdminByEmail = getAdminByEmail;
