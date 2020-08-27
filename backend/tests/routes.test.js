const request = require("supertest");
const app = require("../index");
const group_id = "8f31fdba-2768-4734-81a4-37457a224df8";
const client_id = "d205f720-c06e-4f99-8df3-3f0ee4261e46";

// describe("Post Group", () => {
//   it("should create a new group", async () => {
//     const res = await request(app)
//       .post("/api/groups")
//       .send({
//         name: "group6",
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

// describe("Post Group", () => {
//   it("should throw an error if claims are sent as an object", async () => {
//     const res = await request(app)
//       .post("/api/groups")
//       .send({
//         name: "",
//         creationDate: "2020-06-30 15:39:52.270000",
//         createdBy: "dbbd63b8-b481-466b-bb1a-d0e2b43d8afd",
//         claims: [{ claim: "claim1" }, { claim: "claim2" }],
//         advancedSettings: [{ key: "key", value: "value" }],
//       });
//     expect(res.statusCode).toEqual(422);
//   });
// });

// describe("Get Group by uuid", () => {
//   it("should get a group by uuid", async () => {
//     const res = await request(app).get(`/api/groups/${group_id}`);
//     expect(res.statusCode).toEqual(200);
//   });
// });

// describe("Get all Groups", () => {
//   it("should get all groups", async () => {
//     const res = await request(app).get(`/api/groups`);
//     expect(res.statusCode).toEqual(200);
//   });
// });

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

// describe("Delete Group", () => {
//   it("should delete a group", async () => {
//     const res = await request(app).delete(
//       `/api/groups/97af767d-55ab-4c45-9020-3096e49a19bf`
//     );
//     expect(res.statusCode).toEqual(200);
//   });
// });

// describe("Post Client", () => {
//   it("should create a new client", async () => {
//     const res = await request(app)
//       .post("/api/clients")
//       .send({
//         name: "client9",
//         group_id: "123e4567-e89b-12d3-a456-426614175000",
//         user_id: "123e4567-e89b-12d3-a456-426614174000",
//         advancedSettingClients: [
//           { key: "key2", value: "value2" },
//           { key: "key3", value: "value3" },
//           { key: "key4", value: "value4" },
//         ],
//         attributeMappings: [
//           { key: "attribute1", value: "mapping1" },
//           { key: "attribute2", value: "mapping2" },
//         ],
//       });
//     expect(res.statusCode).toEqual(400);
//   });
// });

// describe("Post Client", () => {
//   it("should throw an error if client name is empty", async () => {
//     const res = await request(app)
//       .post("/api/clients")
//       .send({
//         name: "",
//         group_id: "123e4567-e89b-12d3-a456-426614175000",
//         user_id: "123e4567-e89b-12d3-a456-426614174000",
//         advancedSettingClients: [
//           { key: "key2", value: "value2" },
//           { key: "key3", value: "value3" },
//           { key: "key4", value: "value4" },
//         ],
//         attributeMappings: [
//           { key: "attribute1", value: "mapping1" },
//           { key: "attribute2", value: "mapping2" },
//         ],
//       });
//     expect(res.statusCode).toEqual(422);
//   });
// });

// describe("Get Client by uuid", () => {
//   it("should get a client by uuid", async () => {
//     const res = await request(app).get(`/api/clients/${client_id}`);
//     expect(res.statusCode).toEqual(200);
//   });
// });

// describe("Get all Clients", () => {
//   it("should get all clients", async () => {
//     const res = await request(app).get(`/api/clients`);
//     expect(res.statusCode).toEqual(200);
//   });
// });

describe("Update Client", () => {
  it("should update a client", async (done) => {
    jest.setTimeout(30000);
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

// describe("Delete Client", () => {
//   it("should delete a client", async () => {
//     const res = await request(app).delete(
//       `/api/clients/1c8dd5c2-aee7-4d77-9539-159fe2c5ee95`
//     );
//     expect(res.statusCode).toEqual(200);
//   });
// });
