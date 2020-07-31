const express = require("express");
const Group = require("../database/models/groups");
const GroupClaims = require("../database/models/group_claims");
const AdvancedSettings = require("../database/models/advanced_settings");
const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");

const createGroup = async (req, res) => {
  const group_id = uuidv4();
  const groupName = req.body.name;
  const creationDate = req.body.creationDate;
  const createdBy = req.body.createdBy;
  const groupClaims = req.body.groupClaims;
  const key = req.body.key;
  const value = req.body.value;

  await Group.create({
    group_id: group_id,
    name: groupName,
    creationDate: creationDate,
    createdBy: createdBy,
  }).catch((err) => {
    console.log("Error: " + err);
    return res.sendStatus(400);
  });

  await GroupClaims.create({
    group_id: group_id,
    groupClaims: groupClaims,
  }).catch((err) => {
    console.log("Error: " + err);
    return res.sendStatus(400);
  });

  await AdvancedSettings.create({
    group_id: group_id,
    key: key,
    value: value,
  })
    .then(res.sendStatus(200))
    .catch((err) => {
      console.log("Error: " + err);
      return res.sendStatus(400);
    });
};

const deleteGroup = async (req, res) => {
  const groupId = req.params.groupId;

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
      return res.sendStatus(400);
    });
};

const getGroups = async (req, res) => {
  let groups;
  try {
    groups = await Group.findAll().then((groups) => res.json(groups));
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
