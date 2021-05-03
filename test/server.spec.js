process.env.NODE_ENV = "test";
const { expect } = require("chai");
const supertest = require("supertest");
const server = require("../src/server");
// const testdb = require("./setup");
const knex = require("knex");
const mysql = require("mysql");
const { request } = require("express");

global.expect = expect;
global.supertest = supertest;

let donor = [
  {
    last_name: "Volante",
    first_name: "Dominic",
    street_address: "16 Prospect St",
    city: "New Paltz",
    state_region: "NY",
    country: "United States",
    zip: "12561",
    phone: "8455327914",
    email: "dominicvolante@gmail.com",
    contact: "email",
    payment_type: "USD",
    payment_frequency: "yearly",
    payment_amount: 1000,
    comments: "n/a",
  },
];

describe("POST /donors", () => {
  before(() => {
    testdb = knex({
      client: "mysql",
      connection: {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "wiki_test",
        multipleStatements: true,
      },
    });
  });
  after((done) => {
    testdb
      .destroy()
      .then(() => done())
      .catch((err) => done(err));
  });

  it("POST /donors responds with 200 and adds data provided", () => {
    return supertest(server)
      .post("/donors")
      .send(donor)
      .expect("Information added");
  });
  console.log("got here");
});
