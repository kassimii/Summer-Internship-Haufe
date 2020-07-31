const express = require("express");
const Group = require("../database/models/groups");
const GroupClaims = require("../database/models/group_claims");
const AdvancedSettings = require("../database/models/advanced_settings");
const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");
const models  = require("../database/models");

const createGroup = async (req, res) => {
  const group_id = uuidv4();
  const groupName = req.body.name;
  const creationDate = req.body.creationDate;
  const createdBy = req.body.createdBy;
  const groupClaims = req.body.claims;
  const key = req.body.key;
  const value = req.body.value;

  try {
    await Group.create({
      group_id: group_id,
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

  try {
    await GroupClaims.create({
      group_id: group_id,
      groupClaims: groupClaims,
    })
      .then(res.sendStatus(200))
      .catch((err) => {
        console.log("Error: " + err);
        res.sendStatus(400);
      });
  } catch (error) {
    console.log(error.message);
  }

  try {
    await AdvancedSettings.create({
      group_id: group_id,
      key: key,
      value: value,
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

const getGroups = async (req, res) => {
  let groups;
  try {
    groups = await models.Group.findAll({
      include: [
        {
          model: models.GroupClaims,
          as: "groupClaims",
          attributes: {exclude: ['id']},
        },
        {
          model: models.AdvancedSettings,
          as: "advancedSettings",
          attributes: ['group_id', 'key', 'value'],
        }
      ]
    });
    // .then((groups) => res.json(groups));
    return  res.status(200).json({ groups });

  } catch (err) {
    console.log(err);
  }
};

const getGroupsById = async (req, res) => {
  const { groupId } = req.params;

  let group;

  try {
    group = await Group.findAll({
      attributes: ["group_id", "name"],

      where: {
        group_id: groupId,
      },
    }).then((group) => res.json(group));
  } catch (err) {
    console.log(err);
  }

  if (!group) {
    console.log("HTTP error 404");
    return;
  }
};

const updateGroup = async (req, res) => {
  const { name } = req.body;
  const { groupId } = req.params;

  let group;

  try {
    group = await Group.update(
      { name: name },
      {
        where: {
          group_id: groupId,
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
};

exports.getGroups = getGroups;
exports.getGroupsById = getGroupsById;
exports.updateGroup = updateGroup;
exports.createGroup = createGroup;
exports.deleteGroup = deleteGroup;
