const request = require("supertest");
const app = require("../app");
let group_id;
let client_id;

describe("Post Group", () => {
  it("should create a new group", async (done) => {
    const res = await request(app)
      .post("/api/groups")
      .send({
        name: "group66",
        createdBy: "dbbd63b8-b481-466b-bb1a-d0e2b43d8afd",
        claims: ["claim1", "claim2"],
        advancedSettings: [{ key: "key", value: "value" }],
      });
    group_id = res.body.group.id;
    expect(res.statusCode).toEqual(200);
    done();
  });
});

describe("Post Group", () => {
  it("should throw an error if group has no name", async (done) => {
    const res = await request(app)
      .post("/api/groups")
      .send({
        name: "",
        creationDate: "2020-06-30 15:39:52.270000",
        createdBy: "dbbd63b8-b481-466b-bb1a-d0e2b43d8afd",
        claims: ["claim1", "claim2"],
        advancedSettings: [{ key: "key", value: "value" }],
      });
    expect(res.statusCode).toEqual(422);
    done();
  });
});

describe("Post Group", () => {
  it("should throw an error if claims are sent as an object", async (done) => {
    const res = await request(app)
      .post("/api/groups")
      .send({
        name: "",
        creationDate: "2020-06-30 15:39:52.270000",
        createdBy: "dbbd63b8-b481-466b-bb1a-d0e2b43d8afd",
        claims: [{ claim: "claim1" }, { claim: "claim2" }],
        advancedSettings: [{ key: "key", value: "value" }],
      });
    expect(res.statusCode).toEqual(422);
    done();
  });
});

describe("Get Group by uuid", () => {
  it("should get a group by uuid", async (done) => {
    const res = await request(app).get(`/api/groups/${group_id}`);
    expect(res.statusCode).toEqual(200);
    done();
  });
});

describe("Get all Groups", () => {
  it("should get all groups", async (done) => {
    const res = await request(app).get(`/api/groups`);
    expect(res.statusCode).toEqual(200);
    done();
  });
});

describe("Update Group", () => {
  it("should update a group", async (done) => {
    const res = await request(app)
      .patch(`/api/groups/${group_id}`)
      .send({
        name: "group33",
        claims: ["claim11", "claim22"],
        advancedSettings: [{ key: "key1", value: "value1" }],
      });
    expect(res.statusCode).toEqual(200);
    done();
  });
});

describe("Delete Group", () => {
  it("should delete a group", async (done) => {
    const res = await request(app).delete(`/api/groups/${group_id}`);
    expect(res.statusCode).toEqual(200);
    done();
  });
});

describe("Post Client", () => {
  it("should create a new client", async (done) => {
    const res = await request(app)
      .post("/api/clients")
      .send({
        name: "client1234567",
        group_id: "123e4567-e89b-12d3-a456-426614175000",
        user_id: "123e4567-e89b-12d3-a456-426614174000",
        advancedSettingClients: [
          { key: "key2", value: "value2" },
          { key: "key3", value: "value3" },
          { key: "key4", value: "value4" },
        ],
        attributeMappings: [
          { key: "attribute1", value: "mapping1" },
          { key: "attribute2", value: "mapping2" },
        ],
      });
    client_id = res.body.client.id;
    expect(res.statusCode).toEqual(200);
    done();
  });
});

describe("Post Client", () => {
  it("should throw an error if client name is empty", async (done) => {
    const res = await request(app)
      .post("/api/clients")
      .send({
        name: "",
        group_id: "123e4567-e89b-12d3-a456-426614175000",
        user_id: "123e4567-e89b-12d3-a456-426614174000",
        advancedSettingClients: [
          { key: "key2", value: "value2" },
          { key: "key3", value: "value3" },
          { key: "key4", value: "value4" },
        ],
        attributeMappings: [
          { key: "attribute1", value: "mapping1" },
          { key: "attribute2", value: "mapping2" },
        ],
      });
    expect(res.statusCode).toEqual(422);
    done();
  });
});

describe("Get Client by uuid", () => {
  it("should get a client by uuid", async (done) => {
    const res = await request(app).get(`/api/clients/${client_id}`);
    expect(res.statusCode).toEqual(200);
    done();
  });
});

describe("Get all Clients", () => {
  it("should get all clients", async (done) => {
    const res = await request(app).get(`/api/clients`);
    expect(res.statusCode).toEqual(200);
    done();
  });
});

describe("Update Client", () => {
  it("should update a client", async (done) => {
    const res = await request(app)
      .patch(`/api/clients/${client_id}`)
      .send({
        name: "client99",
        group_id: "123e4567-e89b-12d3-a456-426614175000",
        user_id: "123e4567-e89b-12d3-a456-426614174000",
        advancedSettingClients: [
          { key: "key2", value: "value2" },
          { key: "key3", value: "value3" },
          { key: "key4", value: "value4" },
        ],
        attributeMappings: [
          { key: "attribute1", value: "mapping1" },
          { key: "attribute2", value: "mapping2" },
        ],
      });

    expect(res.statusCode).toEqual(200);
    done();
  });
});

describe("Delete Client", () => {
  it("should delete a client", async (done) => {
    const res = await request(app).delete(`/api/clients/${client_id}`);
    expect(res.statusCode).toEqual(200);
    done();
  });
});
