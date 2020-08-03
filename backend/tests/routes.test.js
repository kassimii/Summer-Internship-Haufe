const request = require("supertest");
const app = require("../index");
const group_id = "84582b22-2463-4415-b992-bcccc5354301";

describe("Post Group", () => {
  it("should create a new group", async () => {
    const res = await request(app)
      .post("/api/groups")
      .send({
        name: "group1",
        creationDate: "2020-06-30 15:39:52.270000",
        createdBy: "dbbd63b8-b481-466b-bb1a-d0e2b43d8afd",
        claims: ["claim1", "claim2"],
        advancedSettings: { key: "key", value: "value" },
      });
    expect(res.statusCode).toEqual(200);
  });
});

describe("Get Group by uuid", () => {
  it("should get a group by uuid", async () => {
    const res = await request(app).get(`/api/groups/${group_id}`);
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
    const res = await request(app)
      .patch(`/api/groups/update/${group_id}`)
      .send({
        name: "group1",
        creationDate: "2020-06-30 15:39:52.270000",
        createdBy: "dbbd63b8-b481-466b-bb1a-d0e2b43d8afd",
        claims: ["claim1", "claim2"],
        advancedSettings: { key: "key", value: "value" },
      });
    expect(res.statusCode).toEqual(200);
  });
});

describe("Delete Group", () => {
  it("should delete a group", async () => {
    const res = await request(app).delete(`/api/groups/delete/${group_id}`);
    expect(res.statusCode).toEqual(200);
  });
});
