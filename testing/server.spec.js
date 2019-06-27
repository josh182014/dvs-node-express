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

  //POST Endpoint
  // it("returns 201", () => {
  //   return request(server)
  //     .post("/register")
  //     .send({ message: "welcome" })
  //     .then(res => {
  //       expect(res.status).toBe(201);
  //     });
  // });
  
});
