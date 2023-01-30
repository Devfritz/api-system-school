const { Router } = require("express");
const { register, login } = require("../controller/auth/controller-auth");

const routerAdminAuth = Router();

routerAdminAuth.post("/register", register);

routerAdminAuth.post("/login", login);

module.exports = routerAdminAuth;
