const express = require("express");
const menuItemRoutes = require('./menuItemRoutes')

const v1Router = express.Router();

v1Router.use("/user", menuItemRoutes);


module.exports = v1Router;