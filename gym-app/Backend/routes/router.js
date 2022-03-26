const express = require('express');
const backendController = require('../controller/backendController');
const route = express.Router();

route.post("/registerUser",backendController.registerUser);
route.post("/loginCheck",backendController.loginCheck);
route.post("/ForgotPassword",backendController.ForgotPassword);
route.post("/resetPassword/:id/:token",backendController.resetPassword);
// route.get("/getresetPassword/:id/:token",backendController.getresetPassword);
module.exports=route;