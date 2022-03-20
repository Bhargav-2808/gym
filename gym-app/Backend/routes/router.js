const express = require('express');
const backendController = require('../controller/backendController');
const route = express.Router();

route.post("/addUser",backendController.addUser);
route.post("/loginCheck",backendController.loginCheck);

module.exports=route;