const express = require("express");
const { Op } = require("sequelize");
const models = require("../database/models");

const createGroup = async (req, res) => {
  const newGroup = {
    ...req.body,
    claims: req.body.claims.map((claim) => {
      return { claim: claim };
    }),
    creationDate: new Date().toISOString()
  };

  try {
    const result = await models.Group.create(newGroup, {
      include: [models.AdvancedSetting, models.Claim]
    });

    return res.status(200).json({ group: result });
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
    } else {
      return res
        .status(404)
        .json({ message: "group does not exist", id: req.params.groupId });
    }
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const getGroups = async (req, res) => {
  let groups;

  try {
    let admin = await models.Admin.findAll({
      where: { emailAddress: { [Op.eq]: req.user.email } }
    });
    if (admin) {
      groups = await models.Group.findAll({
        include: [models.Claim, models.AdvancedSetting]
      });
      return res.status(200).json({ groups });
    }
    let accesibileClaims = await models.Claim.findAll({
      where: { claim: { [Op.in]: req.user.claims } }
    });
    accesibileClaims = accesibileClaims.map((claim) => claim.group_id);
    if (accesibileClaims.length === 0) {
      res.status(401).json({ message: "Bad Claims" });
    }
    let accesibileGroupsIds = await models.Group.findAll({
      where: { id: { [Op.in]: accesibileClaims } }
    });
    accesibileGroupsIds = accesibileGroupsIds.map((group) => group.id);
    groups = await models.Group.findAll({
      include: [models.Claim, models.AdvancedSetting],
      where: {
        id: { [Op.in]: accesibileGroupsIds }
      }
    });

    return res.status(200).json({ groups });
  } catch (err) {
    return res.status(404).json({ error: err });
  }
};

const getGroupsById = async (req, res) => {
  try {
    const group = await models.Group.findByPk(req.params.groupId, {
      include: [models.Claim, models.AdvancedSetting]
    });
    return res.status(200).json({ group });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

const updateGroup = async (req, res) => {
  const { groupId } = req.params;
  const incomingClaims = req.body.claims.map((claim) => {
    return { group_id: req.params.groupId, claim: claim };
  });
  const incomingAdvancedSettings = req.body.advancedSettings.map((setting) => {
    return {
      group_id: req.params.groupId,
      key: setting.key,
      value: setting.value
    };
  });

  try {
    let group = await models.Group.findByPk(groupId, {
      include: [models.Claim, models.AdvancedSetting]
    });

    if (!group) {
      return res
        .status(400)
        .json({ group: {}, message: "Group does not exist" });
    }
    // checking claims for update
    for (let i = 0; i < group.claims.length; i++) {
      let claim = group.claims[i];
      // if stored claims are no longer in incoming claims
      if (!incomingClaims.find((inClaim) => claim.claim === inClaim.claim)) {
        // they are deleted
        await models.Claim.destroy({
          where: { group_id: groupId, claim: claim.claim }
        });
      }
    }
    for (let i = 0; i < incomingClaims.length; i++) {
      let inClaim = incomingClaims[i];
      // if there are new claims
      let currentExistingClaim = group.claims.find(
        (claim) => claim.claim === inClaim.claim
      );
      if (!currentExistingClaim) {
        // they are created
        await models.Claim.create({ group_id: groupId, claim: inClaim.claim });
      }
    }
    // checking advanced settings for update
    for (let i = 0; i < group.advancedSettings.length; i++) {
      let setting = group.advancedSettings[i];
      // if stored advanced settings are no longer in incoming claims
      if (
        !incomingAdvancedSettings.find(
          (inSetting) => inSetting.key === setting.key
        )
      ) {
        // they are deleted
        await models.AdvancedSetting.destroy({
          where: { group_id: groupId, key: setting.key }
        });
      }
    }
    for (let i = 0; i < incomingAdvancedSettings.length; i++) {
      let inSetting = incomingAdvancedSettings[i];
      let currentExistingAdvancedSetting = group.advancedSettings.find(
        (setting) => setting.key === inSetting.key
      );
      // if the incoming advanced settings has a new key it is created
      if (!currentExistingAdvancedSetting) {
        await models.AdvancedSetting.create({
          group_id: groupId,
          ...inSetting
        });
      } else {
        // if we have the same key but different value
        if (inSetting.value !== currentExistingAdvancedSetting.value) {
          currentExistingAdvancedSetting.value = inSetting.value;
          // the setting gets updated
          await currentExistingAdvancedSetting.save({ fields: ["value"] });
        }
      }
    }
    group = await models.Group.findByPk(groupId, {
      include: [models.Claim, models.AdvancedSetting]
    });

    res.status(200).json({ group });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

exports.getGroups = getGroups;
exports.getGroupsById = getGroupsById;
exports.updateGroup = updateGroup;
exports.createGroup = createGroup;
exports.deleteGroup = deleteGroup;
