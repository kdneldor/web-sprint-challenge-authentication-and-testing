const supertest = require("supertest");
const server = require("../api/server");

describe("Tests getting jokes", () => {
  // Can't figure this test out/what is going on with the axios call. 
  it("Gets dad jokes", async () => {
    const res = await supertest(server).get("https://icanhazdadjoke.com/search");
    expect(res.statusCode).toBe(200);
    expect(res.type).toBe("application/json");
  });
});
