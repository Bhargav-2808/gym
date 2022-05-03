import express from 'express';
import { registerUser, loginCheck, ForgotPassword, resetPassword, getUserById, editUser, deleteusers, getusers } from '../controller/backendController.js';

const route = express.Router();

route.post("/registerUser",registerUser);
route.post("/loginCheck",loginCheck);
route.post("/ForgotPassword",ForgotPassword);
route.post("/resetPassword/:id/:token",resetPassword);
route.get('/:id',getUserById);
route.put("/:id",editUser)
route.delete("/:id",deleteusers)
route.get("/", getusers)
// route.get("/getresetPassword/:id/:token",getresetPassword);

export default route;