const server = require("../api/server");
const request = require("supertest");
require("dotenv").config();

describe("GET/api", () => {
  //Sanity check to see if the env variables are set.. passed!
  it('has process.env.NODE_ENV as "test', () => {
    expect(process.env.NODE_ENV).toBe("test");
  });
//tested - passed!
  it('returns 200 OK', () => {
    return request(server).get('/')
      .expect(200)
  }
  );

  //new registration - 

  it('returns 201 newUser', () => {
    return request(server).get('/api/register')
    .expect(201)
  }
  )
});
