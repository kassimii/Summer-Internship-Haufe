const { Client } = require("pg");

const client = new Client({
  user: "user",
  host: "localhost",
  password: "1234",
  database: "haufe",
  port: 3000,
});

client.connect();

const intiTables = `
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE users(
    user_id uuid DEFAULT uuid_generate_v4(),
    email varchar(32),
    firstName varchar(32),
    lastName varchar(32),
    lastLoginDate timestamp,
    PRIMARY KEY (user_id)
);



CREATE TABLE admins(
    admin_id uuid DEFAULT uuid_generate_v4(),
    email varchar(32)

);

CREATE TABLE groups(
    group_id uuid DEFAULT uuid_generate_v4(),
    name varchar(32),
    creationDate timestamp,
    createdBy uuid,
    PRIMARY KEY(group_id),
    FOREIGN KEY (createdBy) REFERENCES users(user_id)
);

CREATE TABLE client_metadata(
    metadata_id uuid DEFAULT uuid_generate_v4(),
    type varchar(32),
    name varchar(32),
    content TEXT,
    PRIMARY KEY(metadata_id)
);

CREATE TABLE status(
    status_id uuid DEFAULT uuid_generate_v4(),
    type varchar(32),
    PRIMARY KEY(status_id)

);

CREATE TABLE clients(
    client_id uuid DEFAULT uuid_generate_v4(),
    group_id uuid,
    metadata uuid,
    name varchar(32),
    status uuid,
    creationDate timestamp,
    createdBy uuid,
    lastModified timestamp,
    lastModifiedBy uuid,
    lastDeployed timestamp,
    PRIMARY KEY(client_id),
    FOREIGN KEY (group_id) REFERENCES groups(group_id),
    FOREIGN KEY (metadata) REFERENCES client_metadata(metadata_id),
    FOREIGN KEY (status) REFERENCES status(status_id),
    FOREIGN KEY (createdBy) REFERENCES users(user_id),
    FOREIGN KEY (lastModifiedBy) REFERENCES users(user_id)


);
`;

const addClaimsAndSettingTable = `
CREATE TABLE group_claims(
    group_id uuid,
    claims varchar(32),
    FOREIGN KEY (group_id) REFERENCES groups(group_id)

);

CREATE TABLE advanced_settings(
    group_id uuid,
    key varchar(32),
    val varchar(32),
    FOREIGN KEY (group_id) REFERENCES groups(group_id)

);
`;

client.query(addClaimsAndSettingTable, (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Hooray, your database  is succesfully initialized");
  client.end();
});
