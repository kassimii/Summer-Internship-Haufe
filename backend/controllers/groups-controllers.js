const express = require("express");
const {v4: uuidv4} = require("uuid");
const {Op} = require("sequelize");
const models = require("../database/models");

const createGroup = async (req, res) => {
  const group_id = uuidv4();
  const groupName = req.body.name;
  const creationDate = new Date().toISOString();
  const createdBy = req.body.createdBy;
  const claims = req.body.claims;
  const key = req.body.advancedSettings.key;
  const value = req.body.advancedSettings.value;


  const newGroup = {
    ...req.body,
    creationDate: new Date().toISOString(),
    id: uuidv4()
  }
  try {
    const result = await models.Group.create(newGroup,
      {
        include: [models.AdvancedSetting, models.Claim]
      }
    );
    // console.log(result.json());
    return res.sendStatus(201);
  } catch (err) {
    console.log("Error: " + err);
    res.sendStatus(400);
  }


  // claims.map(async (claim) => {
  //   await models.GroupClaims.create({
  //     group_id: group_id,
  //     claims: claim,
  //   }).catch((err) => {
  //     console.log("Error claims: " + err);
  //     res.sendStatus(400);
  //   });
  // });
  //
  // await models.AdvancedSettings.create({
  //   group_id: group_id,
  //   key: key,
  //   value: value,
  // })
  //   .then(res.sendStatus(200))
  //   .catch((err) => {
  //     console.log("Error settings: " + err);
  //     res.sendStatus(400);
  //   });
};

const deleteGroup = async (req, res) => {
  const groupId = req.params.groupId;

  await models.Group.destroy({
    where: {
      group_id: {
        [Op.eq]: groupId,
      },
    },
  }).catch((err) => {
    console.log("Error: " + err);
    res.sendStatus(400);
  });

  await models.GroupClaims.destroy({
    where: {
      group_id: {
        [Op.eq]: groupId,
      },
    },
  }).catch((err) => {
    console.log("Error: " + err);
    res.sendStatus(400);
  });

  await models.AdvancedSettings.destroy({
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
};

const getGroups = async (req, res) => {
  let groups;
  try {
    groups = await models.Group.findAll({
      include: [
        {
          model:models.Claim,
          required: true
        },
        models.AdvancedSetting,
      ],
    });

    return res.status(200).json({groups});
  } catch (err) {
    console.log(err);
  }
};

const getGroupsById = async (req, res) => {
  const {groupId} = req.params;

  let group;

  try {
    group = await models.Group.findAll({
      include: [
        {
          model: models.GroupClaims,
          as: "claims",
          attributes: {exclude: ["id"]},
        },
        {
          model: models.AdvancedSettings,
          as: "advancedSettings",
          attributes: ["group_id", "key", "value"],
        },
      ],

      where: {
        group_id: groupId,
      },
    });
    return res.status(200).json({group});
  } catch (err) {
    console.log(err);
  }

  if (!group) {
    console.log("HTTP error 404");
    return res.status(404);
  }
};

const updateGroup = async (req, res) => {
  try {
    const {groupId} = req.params;
    const claims = req.body.claims;
    const key = req.body.advancedSettings.key;
    const value = req.body.advancedSettings.value;

    const [updatedGroup] = await models.Group.update(req.body, {
      where: {group_id: groupId},
    });

    const [updatedGroupClaims] = await models.GroupClaims.update(
      {claims: claims},
      {
        where: {group_id: groupId},
      }
    );

    const [updatedGroupSettings] = await models.AdvancedSettings.update(
      {key: key, value: value},
      {
        where: {group_id: groupId},
      }
    );

    if (updatedGroup) {
      const updatedGroup = await models.Group.findOne({
        include: [
          {
            model: models.GroupClaims,
            as: "claims",
          },
          {
            model: models.AdvancedSettings,
            as: "advancedSettings",
          },
        ],
        where: {group_id: groupId},
      });
      if (updatedGroupClaims) {
        if (updatedGroupSettings) {
          return res.status(200).json({group: updatedGroup});
        }
      }
    }
    throw new Error("Group not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

exports.getGroups = getGroups;
exports.getGroupsById = getGroupsById;
exports.updateGroup = updateGroup;
exports.createGroup = createGroup;
exports.deleteGroup = deleteGroup;
