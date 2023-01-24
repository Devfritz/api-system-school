const express = require("express");
const connectDB = require("../connect/DB");

const app = express();

connectDB();

module.exports = app;
