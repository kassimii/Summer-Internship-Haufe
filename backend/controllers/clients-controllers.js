const express = require("express");
const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");
const models = require("../database/models");

const getclients = async (req, res) => {
  res.status(400).json({ message: "got clients" });
};

const createClient = async (req, res) => {
  res.status(400).json({ message: "created client" });
};

const getClient = async (req, res) => {
  res.status(400).json({ message: "got client" });
};

const updateClient = async (req, res) => {
  res.status(400).json({ message: "updated client" });
};

const deleteClient = async (req, res) => {
  res.status(400).json({ message: "deleted client" });
};

const addStatus = async (req, res) => {
  res.status(400).json({ message: "added client status" });
};
