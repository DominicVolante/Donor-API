const mysql = require("mysql");
const express = require("express");
const Router = express.Router();
const db = require("../connection");

Router.post("/", (req, res) => {
  const params = req.body;
  db.query("INSERT INTO donors SET ?", params, (err, rows, fields) => {
    if (!err) {
      res.send(`Information added`);
    } else {
      console.log(err);
    }
  });
});

Router.get("/", (req, res) => {
  db.query("SELECT * FROM donors", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

module.exports = Router;
