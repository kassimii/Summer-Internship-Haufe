const express = require("express");
const { Op } = require("sequelize");
const models = require("../database/models");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const { config } = require("../config");

const getClients = async (req, res) => {
  let clients;
  let filters = [];
  const limit = parseInt(req.query.limit);
  const page = parseInt(req.query.page);
  const pageNum = page ? page - 1 : 0;
  const size = limit ? limit : 15;
  console.log(req.user);
  if (req.query.name) {
    filters.push({ name: { [Op.substring]: req.query.name } });
  }

  try {
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
    let group;
    if (req.query.group) {
      group = await models.Group.findOne({
        where: {
          [Op.and]: [
            { name: { [Op.substring]: req.query.group } },
            { id: { [Op.in]: accesibileGroupsIds } }
          ]
        }
      });
      filters.push({ group_id: { [Op.eq]: group.id } });
    }
    clients = await models.Client.findAndCountAll({
      distinct: true,
      limit: size,
      offset: pageNum * size,
      order: [["name", "ASC"]],
      include: [
        models.AdvancedSettingClient,
        models.AttributeMapping,
        {
          model: models.ClientStatus,
          order: [["creationDate", "DESC"]],
          limit: 1
        },
        models.Metadata
      ],
      where: {
        [Op.and]: [filters, { group_id: { [Op.in]: accesibileGroupsIds } }]
      }
    });
    let clientCount = clients.count;
    clients = clients.rows;
    if (!clients) {
      return res.status(200).json({ clients: {}, message: "No clients in DB" });
    }
    let convertedClients = [];
    for (let i = 0; i < clients.length; i++) {
      const latestStatus = await models.Status.findByPk(
        clients[i].clientStatuses[0].status_id
      );
      var convertedClient = clients[i].get({ plain: true });
      convertedClient.latestStatus = latestStatus;
      delete convertedClient.clientStatuses;
      convertedClients.push(convertedClient);
    }
    if (req.query.status) {
      convertedClients = convertedClients.filter((client) => {
        return client.latestStatus.type === req.query.status;
      });
    }
    res.status(200).json({
      totalClients: clientCount,
      totalPages: Math.ceil(clientCount / size),
      currentPage: pageNum + 1,
      clientsLength: convertedClients.length,
      clients: convertedClients
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err });
  }
};

const getClientById = async (req, res) => {
  try {
    const client = await models.Client.findByPk(req.params.clientId, {
      include: [
        models.AdvancedSettingClient,
        models.AttributeMapping,
        {
          model: models.ClientStatus,
          order: [["creationDate", "DESC"]],
          limit: 1
        },
        models.Metadata
      ]
    });
    if (!client) {
      return res
        .status(400)
        .json({ client: {}, message: "Client does not exist" });
    }
    const latestStatus = await models.Status.findByPk(
      client.clientStatuses[0].status_id
    );
    client.metadata = await models.Metadata.findAll({
      where: {
        client_id: client.id
      }
    });
    const group = await models.Group.findByPk(client.group_id);
    var convertedClient = client.get({ plain: true });
    delete convertedClient.clientStatuses;
    convertedClient.latestStatus = latestStatus;
    convertedClient.group = group;
    return res.status(200).json({ client: convertedClient });
  } catch (err) {
    return res.status(404).json({ error: err });
  }
};

const createClient = async (req, res) => {
  let newStatusId;
  try {
    newStatusId = await models.Status.findOne({
      where: {
        type: {
          [Op.eq]: "NEW"
        }
      }
    });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
  const newClient = {
    ...req.body,
    createdBy: req.body.userId,
    creationDate: new Date().toISOString(),
    lastModified: new Date().toISOString(),
    lastModifiedBy: req.body.userId,
    clientStatuses: [
      { creationDate: new Date().toISOString(), status_id: newStatusId.id }
    ]
  };

  try {
    const result = await models.Client.create(newClient, {
      include: [
        models.AdvancedSettingClient,
        models.AttributeMapping,
        models.ClientStatus
        // models.Metadata
      ]
    });
    return res.status(200).json({ client: result });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const updateClient = async (req, res) => {
  console.log(req.body);
  const clientId = req.params.clientId;
  var incomingAdvancedSettings = req.body.advancedSettingClients;
  var incomingAttributesMapping = req.body.attributeMappings;
  const userId = req.body.userId;

  try {
    let client = await models.Client.findByPk(clientId, {
      include: [
        models.AdvancedSettingClient,
        models.AttributeMapping,
        models.ClientStatus,
        models.Metadata
      ]
    });
    if (!client) {
      return res
        .status(400)
        .json({ client: {}, message: "Client does not exist" });
    }

    const updateSettingsOrAttributes = async (decider) => {
      let existingData, incomingData;
      switch (decider) {
        case "settings":
          existingData = client.advancedSettingClients;
          incomingData = incomingAdvancedSettings;
          break;
        case "attributes":
          existingData = client.attributeMappings;
          incomingData = incomingAttributesMapping;
          break;
        default:
          return;
      }
      // checking if some settings have been deleted
      for (let i = 0; i < existingData.length; i++) {
        let setting = existingData[i];
        if (!incomingData.find((inSetting) => setting.key === inSetting.key)) {
          // if so we delete them from the DB
          if (decider === "settings") {
            await models.AdvancedSettingClient.destroy({
              where: { client_id: clientId, key: setting.key }
            });
          }
          if (decider === "attributes") {
            await models.AttributeMapping.destroy({
              where: { client_id: clientId, key: setting.key }
            });
          }
        }
      }

      // checking if we have new settings incoming or old ones have been updated
      for (let i = 0; i < incomingData.length; i++) {
        let inSetting = incomingData[i];
        let currentExistingSetting = existingData.find(
          (setting) => setting.key === inSetting.key
        );
        if (!currentExistingSetting) {
          // if the incoming setting is new, it is created
          if (decider === "settings") {
            await models.AdvancedSettingClient.create({
              client_id: clientId,
              ...inSetting
            });
          }
          if (decider === "attributes") {
            await models.AttributeMapping.create({
              client_id: clientId,
              ...inSetting
            });
          }
        } else {
          // if the current key exists but the value is different, value is updated
          if (inSetting.value !== currentExistingSetting.value) {
            currentExistingSetting.value = inSetting.value;
            await currentExistingSetting.save({ fields: ["value"] });
          }
        }
      }
    };

    await updateSettingsOrAttributes("settings");
    await updateSettingsOrAttributes("attributes");

    client.lastModified = new Date().toISOString();
    client.lastModifiedBy = userId;
    client.name = req.body.name;
    await client.save({ fields: ["name", "lastModified", "lastModifiedBy"] });
    client = await models.Client.findByPk(clientId, {
      include: [
        models.AdvancedSettingClient,
        models.AttributeMapping,
        {
          model: models.ClientStatus,
          order: [["creationDate", "DESC"]],
          limit: 1
        },
        models.Metadata
      ]
    });
    const latestStatus = await models.Status.findByPk(
      client.clientStatuses[0].status_id
    );
    var convertedClient = client.get({ plain: true });
    delete convertedClient.clientStatuses;
    convertedClient.latestStatus = latestStatus;
    const group = await models.Group.findByPk(client.group_id);
    convertedClient.group = group;
    res.status(200).json({ client: convertedClient });
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const deleteClient = async (req, res) => {
  const clientId = req.params.clientId;
  try {
    const client = await models.Client.findByPk(clientId);
    if (client) {
      await client.destroy();
      return res.status(200).json({ message: "deleted client", id: clientId });
    }
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const addStatus = async (req, res) => {
  const clientId = req.params.clientId;
  const userId = req.body.userId;
  const newStatus = req.body.status;
  let newStatusId;
  const statusValidation = (latestStatus, newStatus) => {
    switch (latestStatus) {
      case "NEW":
        if (newStatus !== "REQUEST APPROVAL") return false;
        break;
      case "REQUEST APPROVAL":
        if (newStatus !== "WAIT FOR DEPLOYMENT") return false;
        break;
      case "WAIT FOR DEPLOYMENT":
        if (newStatus !== "DEPLOYED") return false;
        break;
      case "DEPLOYED":
        if (newStatus !== "WAIT FOR DEPLOYMENT") return false;
        break;
    }
    return true;
  };
  try {
    let oldStatus = await models.ClientStatus.findAll({
      order: [["creationDate", "DESC"]],
      where: {
        client_id: { [Op.eq]: clientId }
      }
    });
    oldStatus = oldStatus[0];
    oldStatus = await models.Status.findByPk(oldStatus.status_id);
    if (!statusValidation(oldStatus.type, newStatus)) {
      return res
        .status(400)
        .json({ error: [{ message: "Incorrect status order" }] });
    }
    newStatusId = await models.Status.findOne({
      where: {
        type: {
          [Op.eq]: newStatus
        }
      }
    });

    let client = await models.Client.findByPk(clientId);
    if (!client)
      return res.status(400).json({ error: [{ message: "Wrong client id" }] });
    const newEntry = {
      client_id: clientId,
      status_id: newStatusId.id,
      creationDate: new Date().toISOString()
    };
    const newClientStatus = await models.ClientStatus.create(newEntry);
    client.lastModified = new Date().toISOString();
    client.lastModifiedBy = userId;
    await client.save({ fields: ["lastModified", "lastModifiedBy"] });

    return res.status(200).json({ status: newClientStatus });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

const getStatus = async (req, res) => {
  const clientId = req.params.clientId;
  let status;
  try {
    const client_status = await models.ClientStatus.findAll({
      order: [["creationDate", "DESC"]],
      where: {
        client_id: { [Op.eq]: clientId }
      }
    });
    status = await models.Status.findByPk(client_status[0].status_id);

    return res.status(200).json({ status: status });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

const addMetadata = async (req, res) => {
  const clientId = req.params.clientId;
  const metadata = req.body.content;
  const type = req.body.type;
  try {
    console.log(req.file);

    if (req.file == undefined) {
      return res.send("You must send a file");
    }

    const result = await models.Metadata.create({
      client_id: clientId,
      type: req.file.mimetype,
      name: req.file.originalname,
      content: req.file.path
    });

    return res.send("File has been uploaded");
  } catch (err) {
    console.log(err);
    return res.status(404).json({ error: err });
  }
};

const getMetadata = async (req, res) => {
  const dataName = req.params.name;

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  res.download(`./uploads/${dataName}`);
  // res.status(400).json({ message: "got metadata by id for client " });
};

const updateMetadata = async (req, res) => {
  res.status(400).json({ message: "updated medatada" });
};

const deleteMetadata = async (req, res) => {
  res.status(400).json({ message: "deleted metadata" });
};

exports.getClients = getClients;
exports.createClient = createClient;
exports.getClientById = getClientById;
exports.updateClient = updateClient;
exports.deleteClient = deleteClient;
exports.addStatus = addStatus;
exports.getStatus = getStatus;
exports.addMetadata = addMetadata;
exports.getMetadata = getMetadata;
exports.updateMetadata = updateMetadata;
exports.deleteMetadata = deleteMetadata;
