const express = require('express');
const backendController = require('../controller/backendController');
const route = express.Router();

route.post("/registerUser",backendController.registerUser);
route.post("/loginCheck",backendController.loginCheck);
route.post("/resetPassword",backendController.resetPassword);

module.exports=route;