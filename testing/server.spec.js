const server = require("../api/server");
const request = require("supertest");

describe("GET/api", () => {
  //Sanity check to see if the env variables are set
  it('has process.env.DB_ENV as "testing', () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});
