const express = require("express");
const Group = require("../models/groups");
const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");

const createGroup = async (req, res) => {
  const groupName = req.body.name;
  const creationDate = req.body.creationDate;
  const createdBy = req.body.createdBy;

  try {
    await Group.create({
      group_id: uuidv4(),
      name: groupName,
      creationDate: creationDate,
      createdBy: createdBy,
    })
      .then(res.sendStatus(200))
      .catch((err) => {
        console.log("Error: " + err);
        res.sendStatus(400);
      });
  } catch (error) {
    console.log(error.message);
  }
};

const deleteGroup = async (req, res) => {
  const groupId = req.params.groupId;
  try {
    await Group.destroy({
      where: {
        group_id: {
          [Op.eq]: groupId,
        },
      },
    })
      .then(res.sendStatus(200))
      .catch((err) => {
        console.log("Error: " + err);
        res.sendStatus(400);
      });
  } catch (error) {
    console.log(error.message);
  }
};

exports.createGroup = createGroup;
exports.deleteGroup = deleteGroup;
