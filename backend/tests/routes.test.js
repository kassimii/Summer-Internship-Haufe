const request = require("supertest");
const app = require("../index");
const group_id = "563b52ce-bc3c-4b82-b910-1001459e9f8b";

// describe("Post Group", () => {
//   it("should create a new group", async () => {
//     const res = await request(app)
//       .post("/api/groups")
//       .send({
//         name: "group12",
//         createdBy: "dbbd63b8-b481-466b-bb1a-d0e2b43d8afd",
//         claims: ["claim1", "claim2"],
//         advancedSettings: [{ key: "key", value: "value" }],
//       });
//     expect(res.statusCode).toEqual(200);
//   });
// });

// describe("Post Group", () => {
//   it("should throw an error if group has no name", async () => {
//     const res = await request(app)
//       .post("/api/groups")
//       .send({
//         name: "",
//         creationDate: "2020-06-30 15:39:52.270000",
//         createdBy: "dbbd63b8-b481-466b-bb1a-d0e2b43d8afd",
//         claims: ["claim1", "claim2"],
//         advancedSettings: [{ key: "key", value: "value" }],
//       });
//     expect(res.statusCode).toEqual(422);
//   });
// });

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

// describe("Update Group", () => {
//   it("should update a group", async () => {
//     jest.setTimeout(100000);
//     const res = await request(app)
//       .patch(`/api/groups/${group_id}`)
//       .send({
//         name: "group33",
//         claims: ["claim1", "claim2"],
//         advancedSettings: [{ key: "key", value: "value" }],
//       });
//     expect(res.statusCode).toEqual(200);
//   });
// });

describe("Delete Group", () => {
  it("should delete a group", async () => {
    const res = await request(app).delete(
      `/api/groups/c427172b-bd67-4b44-b1d0-196bd54a2798`
    );
    expect(res.statusCode).toEqual(200);
  });
});
