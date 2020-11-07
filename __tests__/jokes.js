const { default: expectCt } = require("helmet/dist/middlewares/expect-ct")
const supertest = require("supertest")
const server = require("../api/server")
const { intersect } = require("../database/dbConfig")
const db = require("../database/dbConfig")

describe("jokes tests", () => {
    it("gets jokes", async () => {
       const res = await supertest(server).get("/api/jokes")
       expect(res.statusCode).toBe(200)
       expect(res.type).toBe("application/json")

    })
})