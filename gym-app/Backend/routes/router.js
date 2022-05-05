import express from "express";
import {
  registerUser,
  loginCheck,
  ForgotPassword,
  resetPassword,
  getUserById,
  editUser,
  deleteusers,
  getusers,
  addfeedback,
  deletefeedback,
  getfeedback,
  getPayment,
} from "../controller/backendController.js";

const route = express.Router();

console.log(route.get("/getfeedback", getfeedback));
console.log(route.get("/", getusers));
console.log(route.delete("/deletefeedback/:id", deletefeedback));

route.get("/getfeedback", getfeedback);
route.get("/", getusers);
route.get("/payment", getPayment);
route.post("/registerUser", registerUser);
route.post("/loginCheck", loginCheck);
route.post("/ForgotPassword", ForgotPassword);
route.post("/resetPassword/:id/:token", resetPassword);
route.get("/:id", getUserById);
route.put("/:id", editUser);
route.delete("/:id", deleteusers);
route.post("/addfeedback", addfeedback);
route.delete("/deletefeedback/:id", deletefeedback);

// route.get("/getresetPassword/:id/:token",getresetPassword);

export { route };
