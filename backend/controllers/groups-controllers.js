const express = require("express");
const Group = require("../models/groups");
const { v4: uuidv4 } = require("uuid");

const createGroup = async (req, res) => {
  const groupName = req.body.name;
  const creationDate = req.body.creationDate;
  const createdBy = req.body.createdBy;

  try {
    const group = await Group.create({
      group_id: uuidv4(),
      name: groupName,
      creationDate: creationDate,
      createdBy: createdBy,
    })
      .then(res.send("Group created"))
      .catch((err) => console.log("Error: " + err));

    console.log(group);
  } catch (error) {
    console.log(error.message);
  }
};

exports.createGroup = createGroup;
