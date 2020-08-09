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
  console.log("====" + req.body);
  const { groupId } = req.params;
  const claimsNew = req.body.claims.map((claim) => {
    return { group_id: req.params.groupId, claim: claim };
  });
  const advancedSettingsNew = req.body.advancedSettings.map((setting) => {
    return {
      group_id: req.params.groupId,
      key: setting.key,
      value: setting.value
    };
  });

  try {
    let group = await models.Group.findOne({
      include: [models.Claim, models.AdvancedSetting],

      where: {
        id: {
          [Op.eq]: groupId
        }
      }
    });

    if (group) {
      const groupClaims = group.claims;
      const groupAdvancedSettings = group.advancedSettings;

      group.update(req.body);
      group.save();

      groupClaims.forEach((claim) => {
        if (
          claimsNew.map((claim) => claim.claim).includes(claim.dataValues.claim)
        ) {
          console.log("deja este");
        } else {
          models.Claim.destroy({
            where: { claim: claim.dataValues.claim }
          });
        }
      });

      console.log(groupClaims);
      console.log(claimsNew);
      claimsNew.forEach((newClaim) => {
        if (
          groupClaims.map((gc) => gc.dataValues.claim).includes(newClaim.claim)
        ) {
          console.log("deja este ma");
        } else {
          models.Claim.create(newClaim);
          console.log("created");
        }
      });

      // groupAdvancedSettings.forEach( (setting, flag) => {
      //   advancedSettingsNew.forEach((newSetting => {
      //     if(newSetting.key === setting.key){

      //   }));

      // });

      const existingAdvancedSettingsKeys = groupAdvancedSettings.map(
        (setting) => setting.key
      );
      const newAdvancedSettingsKeys = advancedSettingsNew.map(
        (setting) => setting.key
      );

      existingAdvancedSettingsKeys.forEach((existing_key) => {
        if (newAdvancedSettingsKeys.includes(existing_key)) {
          console.log("exists");
        } else {
          models.AdvancedSetting.destroy({
            where: {
              key: existing_key
            }
          });
        }
      });
      // advancedSettingsNew.forEach((newSetting) => {
      //   groupAdvancedSettings.forEach( (setting) => {
      //     if(setting.key === newSetting.key) {

      //     }

      //   });

      // if(flag !==2){
      //   models.AdvancedSetting.create(newSetting);
      // }

      advancedSettingsNew.forEach((newSetting) => {
        if (existingAdvancedSettingsKeys.includes(newSetting.key)) {
          models.AdvancedSetting.update(
            { value: newSetting.value },
            {
              where: {
                key: newSetting.key
              }
            }
          );
        } else {
          models.AdvancedSetting.create(newSetting);
        }
      });
      console.log(group);
      return res.status(201).json({ group });
    }
  } catch (err) {
    console.log("Error: " + err);
    res.status(400).json({ error: err });
  }
};

exports.getGroups = getGroups;
exports.getGroupsById = getGroupsById;
exports.updateGroup = updateGroup;
exports.createGroup = createGroup;
exports.deleteGroup = deleteGroup;
