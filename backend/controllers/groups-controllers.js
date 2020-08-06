const express = require("express");
const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");
const models = require("../database/models");

const createGroup = async (req, res) => {
  const newGroup = {
    ...req.body,
    claims: req.body.claims.map((claim) => {
      return { claim: claim };
    }),
    creationDate: new Date().toISOString(),
    id: uuidv4()
  };

  try {
    const result = await models.Group.create(newGroup, {
      include: [models.AdvancedSetting, models.Claim]
    });
    return res.status(201).json({ group: result });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const deleteGroup = async (req, res) => {
  const groupId = req.params.groupId;

  try {
    const group = await models.Group.findOne({
      where: {
        id: {
          [Op.eq]: groupId
        }
      }
    });

    if (group) {
      await group.destroy();

      return res
        .status(200)
        .json({ message: "deleted group", id: req.params.groupId });
    }
  } catch (err) {
    console.log("Error: " + err);
    res.status(400).json({ error: err });
  }
};

const getGroups = async (req, res) => {
  let groups;
  try {
    groups = await models.Group.findAll({
      include: [models.Claim, models.AdvancedSetting]
    });

    return res.status(200).json({ groups });
  } catch (err) {
    console.log(err);
  }
};

const getGroupsById = async (req, res) => {
  try {
    const group = await models.Group.findByPk(req.params.groupId, {
      include: [models.Claim, models.AdvancedSetting]
    });
    return res.status(200).json({ group });
  } catch (err) {
    return res.status(404).json({ error: err });
  }
};

const updateGroup = async (req, res) => {
  console.log(req.body);
  try {
    const { groupId } = req.params;
    const claims = req.body.claims;
    const key = req.body.advancedSettings.key;
    const value = req.body.advancedSettings.value;

    const [updatedGroup] = await models.Group.update(req.body, {
      where: { id: groupId }
    });

    const [updatedGroupClaims] = await models.Claim.update(
      { claims: claims },
      {
        where: { group_id: groupId }
      }
    );

    const [updatedGroupSettings] = await models.AdvancedSetting.update(
      { key: key, value: value },
      {
        where: { group_id: groupId }
      }
    );

    if (updatedGroup) {
      const updatedGroup = await models.Group.findOne({
        include: [
          {
            model: models.Claim,
            as: "claims"
          },
          {
            model: models.AdvancedSetting,
            as: "advancedSettings"
          }
        ],
        where: { group_id: groupId }
      });
      if (updatedGroupClaims) {
        if (updatedGroupSettings) {
          return res.status(200).json({ group: updatedGroup });
        }
      }
    }
    throw new Error("Group not found");
  } catch (error) {
    return res.status(500).json({ error });
  }
};

exports.getGroups = getGroups;
exports.getGroupsById = getGroupsById;
exports.updateGroup = updateGroup;
exports.createGroup = createGroup;
exports.deleteGroup = deleteGroup;
