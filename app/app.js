const express = require("express");
const connectDB = require("../connect/DB");
const {
  globalErrorHandler,
  notFound,
} = require("../middleware/globalErrorHandler.js");

const app = express();

app.use(express.json());

connectDB();

//  route authentification
app.use("/api/v1/auth/admins", require("../route/route-auth-admin"));
// route admin user
app.use("/api/v1/", require("../route/route-admin"));

app.use(globalErrorHandler);
//  Ressource not found
app.use(notFound);

module.exports = app;
