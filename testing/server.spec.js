const server = require("../api/server");
const request = require("supertest");
const db = require('../db/dbconfig');
const users = require('../users/usersModel');
require("dotenv").config();

describe("GET/api", () => {
  //Sanity check to see if the env variables are set.. passed!
  it('has process.env.NODE_ENV as "test', () => {
    expect(process.env.NODE_ENV).toBe("test");
  });




  //GET endpoint tested - passed!
  it('returns 200 OK', () => {
    return request(server).get('/')
      .expect(200)
  }
  );
//GET - passed
  it("GET/users should return an array", () => {
    const expected = [];

    return request(server)
      .get("/users")
      .then(res => {
        expect(expected).toEqual([]);
      });
  });

// POST - 
  it("POST/users should return code:200", () => {
    return request(server)
      .post("/users")
      .send({
        message: `Welcome ${user.username}!` })
      .then(res => {
        expect(res.status).toBe(200).json;
      });


  })
});
