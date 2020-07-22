const express = require("express");
const Group = require("../models/groups");

const createGroup = async (req, res) => {
  const groupName = req.body.name;
  const creationDate = req.body.creationDate;
  const createdBy = req.body.createdBy;

  try {
    const group = await Group.create({
      name: groupName,
      creationDate: creationDate,
      createdBy: createdBy,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.createGroup = createGroup;
