const { Router } = require("express");
const { getUser } = require("../controller/controller-user");
const isLogin = require("../middleware/isLogin");

const routerAdmin = Router();

routerAdmin.get("/profile/admin/", isLogin, getUser);

module.exports = routerAdmin;
