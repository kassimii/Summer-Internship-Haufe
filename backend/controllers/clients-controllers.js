const express = require("express");
const { v4: uuidv4 } = require("uuid");
const { Op } = require("sequelize");
const models = require("../database/models");

const getClients = async (req, res) => {
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

const addMetadata = async (req, res) => {
  res.status(400).json({ message: "added metadata for client" });
};

const getAllMetadata = async (req, res) => {
  res.status(400).json({ message: "got all metadata for client" });
};

const getMetadata = async (req, res) => {
  res.status(400).json({ message: "got metadata by id for client " });
};

const updateMetadata = async (req, res) => {
  res.status(400).json({ message: "updated medatada" });
};

const deleteMetadata = async (req, res) => {
  res.status(400).json({ message: "deleted metadata" });
};

exports.getClients = getClients;
exports.createClient = createClient;
exports.getClient = getClient;
exports.updateClient = updateClient;
exports.deleteClient = deleteClient;
exports.addStatus = addStatus;
exports.addMetadata = addMetadata;
exports.getAllMetadata = getAllMetadata;
exports.getMetadata = getMetadata;
exports.updateMetadata = updateMetadata;
exports.deleteMetadata = deleteMetadata;
