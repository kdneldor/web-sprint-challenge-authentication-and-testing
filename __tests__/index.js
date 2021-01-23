const supertest = require("supertest");
const server = require("../api/server");

describe("Tests CRUD Ops", () => {
// This test works, but needs new information because username and password exist in database, change that info and run again to see success.
//   it("Tests Registration", async () => {
//     const res = await supertest(server)
//       .post("/api/auth/register")
//       .send({ username: "SW_Lover", password: "jar-jar" });
//     expect(res.statusCode).toBe(201);
//     expect(res.type).toBe("application/json");
//     expect(res.body.username).toBe("SW_Lover");
//   });
// This test also works. 
  it("Tests Login", async () => {
      const res = await supertest(server)
      .post("/api/auth/login")
      .send({username: "SW_Lover", password: "jar-jar"})
      expect(res.statusCode).toBe(200)
      expect(res.type).toBe("application/json")
  })
});
