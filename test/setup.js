const { expect } = require("chai");
const supertest = require("supertest");
const mysql = require("mysql");

var testdb = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "wiki_test",
  multipleStatements: true,
});

testdb.connect((err) => {
  if (!err) {
    console.log("connected");
  } else {
    console.log(err);
  }
});

global.expect = expect;
global.supertest = supertest;

module.exports = { testdb };
