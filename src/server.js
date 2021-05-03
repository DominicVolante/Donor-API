const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./connection");
const DonorRoutes = require("./routes/donors");

var app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/donors", DonorRoutes);

app.listen(3000);

module.exports = app;
