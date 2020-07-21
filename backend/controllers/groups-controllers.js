const express = require("express");
const Group = require("../models/groups");

const createGroup = async (req, res) => {
  const groupName = req.body;

  try {
    console.log(req.body);
  } catch (error) {
    console.err(error.message);
  }
};

exports.createGroup = createGroup;
