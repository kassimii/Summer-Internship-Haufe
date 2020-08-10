const request = require("supertest");
const app = require("../index");

//should seed before running tests!

describe("Post Group", () => {
  it("should create a new group", async () => {
    const res = await request(app)
      .post("/api/groups")
      .send({
        name: "dfggffagaaaa",
        createdBy: "dbbd63b8-b481-466b-bb1a-d0e2b43d8afd",
        claims: ["claim1", "claim2"],
        advancedSettings: [{ key: "key", value: "value" }],
      });
    expect(res.statusCode).toEqual(200);
  });
});

describe("Post Group", () => {
  it("should throw an error if group has no name", async () => {
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
  });
});

describe("Post Group", () => {
  it("should throw an error if claims are sent as an object", async () => {
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
  });
});

describe("Get Group by uuid", () => {
  it("tries to get a group by inexisting uuid", async () => {
    const res = await request(app).get(
      `/api/groups/563b52ce-bc3c-4b82-b910-1001459e9f8b`
    );
    expect(res.statusCode).toEqual(404);
  });
});

describe("Get Group by uuid", () => {
  it(" get a group by  uuid", async () => {
    const res = await request(app).get(
      `/api/groups/1de95611-051a-4b04-b6bc-cae9a59e577b`
    );
    expect(res.statusCode).toEqual(200);
  });
});

describe("Get all Groups", () => {
  it("should get all groups", async () => {
    const res = await request(app).get(`/api/groups`);
    expect(res.statusCode).toEqual(200);
  });
});

describe("Update Group", () => {
  it("should update a group", async () => {
    jest.setTimeout(100000);
    const res = await request(app)
      .patch(`/api/groups/123e4567-e89b-12d3-a456-426614174012`)
      .send({
        name: "group33",
        claims: ["claim1", "claim2"],
        advancedSettings: [{ key: "key", value: "value" }],
      });
    expect(res.statusCode).toEqual(200);
  });
});

describe("Update Group", () => {
  it("should update a group", async () => {
    jest.setTimeout(100000);
    const res = await request(app)
      .patch(`/api/groups/123e4567-e89b-12d3-a456-426614174012`)
      .send({
        name: "group33",
        claims: ["claim1", "claim2"],
        advancedSettings: [{ key: "key", value: "value" }],
      });
    expect(res.statusCode).toEqual(200);
  });
});

describe("Update Group", () => {
  it("tries to update a group with an empty name", async () => {
    jest.setTimeout(100000);
    const res = await request(app)
      .patch(`/api/groups/123e4567-e89b-12d3-a456-426614174012`)
      .send({
        name: "",
        claims: ["claim1", "claim2"],
        advancedSettings: [{ key: "key", value: "value" }],
      });
    expect(res.statusCode).toEqual(422);
  });
});

describe("Update Group", () => {
  it("tries to update a group with claims sent as objects", async () => {
    jest.setTimeout(100000);
    const res = await request(app)
      .patch(`/api/groups/123e4567-e89b-12d3-a456-426614174012`)
      .send({
        name: "",
        claims: [{ claim: "claim1" }, { claim: "claim2" }],
        advancedSettings: [{ key: "key", value: "value" }],
      });
    expect(res.statusCode).toEqual(422);
  });
});

describe("Delete Group", () => {
  it("should delete a group", async () => {
    const res = await request(app).delete(
      `/api/groups/123e4567-e89b-12d3-a456-426614174111`
    );
    expect(res.statusCode).toEqual(200);
  });
});

describe("Delete Group", () => {
  it("trying to delete a group that does not exist", async () => {
    const res = await request(app).delete(
      `/api/groups/123e4567-e89b-12d3-a456-426614174111`
    );
    expect(res.statusCode).toEqual(404);
  });
});
