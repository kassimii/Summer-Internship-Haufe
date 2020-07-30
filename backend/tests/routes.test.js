const request = require("supertest");
const app = require("../index");

describe("Post Endpoint", () => {
  it("should create a new group", async () => {
    const res = await request(app)
      .post("/api/groups")
      .send({
        //group_id: "123e4567-e89b-12d3-a456-426614174000",
        name: "group1",
        creationDate: "2020-06-30 15:39:52.270000",
        createdBy: "dbbd63b8-b481-466b-bb1a-d0e2b43d8afd",
        groupClaims: ["claim1", "claim2"],
        key: "key",
        value: "value",
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("post");
  });
});

// describe("Delete Endpoint", () => {
//   it("should delete a group", async () => {
//     const res = await request(app).post("/api/groups/delete/:groupId").send({
//       group_id: "123e4567-e89b-12d3-a456-426614174000",
//     });
//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toHaveProperty("delete");
//   });
// });
