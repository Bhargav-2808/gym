import { Users, Feedback } from "../model/user.js";
import nodemailer from "nodemailer";
// const bcrypt = require('bcryptjs');
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { ReportGmailerrorred } from "@mui/icons-material";

const sendEmail = async (email, text) => {};

const registerUser = async (req, res) => {
  const fname = req.body.firstName;
  const lname = req.body.lastName;
  const uname = fname + " " + lname;

  const uemail = req.body.email;
  const num = req.body.mobile;

  const pass = req.body.password;
  const cpass = req.body.cpassword;
  //const user = req.body;
  // console.log(pass);
  // console.log(cpass);

  try {
    const userExist = await Users.findOne({ email: uemail });

    if (userExist) {
      res.status(400).json({ Error: "User Alreay Exist" });
    } else {
      if (pass == cpass) {
        //const salt = bcrypt.genSaltSync(10);
        //const secpass = bcrypt.hashSync(pass, salt);

        const newUser = await new Users({
          _id: new mongoose.Types.ObjectId(),
          name: uname,
          email: uemail,
          mobile: num,
          password: pass,
        });

        const addedUser = await newUser.save();

        if (addedUser) {
          res.status(200).json({ Success: "User Added" });
        } else {
          res.status(500).json({ Error: "Internal Server Error" });
        }
      } else {
        res.status(406).json({ Error: "Both Password must be same." });
      }
    }
  } catch (error) {
    res.status(500).json({ Error: "Internal Server Error" });
    console.log({ error });
  }
};

const loginCheck = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const userf = await Users.findOne({ email: email });

    if (userf) {
      //const comparePassword=await bcrypt.compare(password, user.password);

      if (password === userf.password) {
        // res.send(userf,"Login successful");
        res.status(200).json({ Success: "Login Successfull.", user: userf });
      } else {
        res.status(400).json({ Error: "Login Using Correct Credentials." });
      }
    } else {
      res.status(400).json({ Error: "No User Found." });
    }
  } catch (error) {
    res.status(500).json({ Error: "Internal Server Error" });
    console.log({ error });
  }
};

const resetPassword = async (req, res) => {
  const email = req.body.pemail;
  //console.log(email);
  const Npassword = req.body.Npassword;
  // console.log(Npassword);
  const { id, token } = req.params;

  try {
    const userf = await Users.findOne({ email: email });
    //console.log((userf._id).toString());

    //console.log(id);
    //console.log(userf._id);

    if (id !== userf._id.toString()) {
      res.send("Invalid id ");
      return;
    }
  } catch (error) {
    console.log(error);
  }

  try {
    const userf = await Users.findOne({ email: email });
    //console.log(userf);
    const secret = JWT_SECRET + userf.password;
    const payload = jwt.verify(token, secret);
    //console.log(payload);

    userf.password = Npassword;
    await userf.save();
    res.send("Your password has been changed");
    console.log(userf);
  } catch (error) {
    //res.status(500).json({ Error: "Internal Server Error" });
    // console.log(error);
    res.send(error, "Server error occured");
  }
  //console.log(Npassword)
};

const JWT_SECRET = "some super secret..";

const ForgotPassword = async (req, res) => {
  //console.log(email);

  try {
    const email = req.body.femail;
    console.log(email);
    const userf = await Users.findOne({ email: email });
    console.log(email);
    //console.log(user.password);
    //console.log(JSON.stringify(user._id));

    if (userf) {
      //create onetime link
      const secret = JWT_SECRET + userf.password;

      const payload = {
        email: userf.email,
        id: userf._id,
      };

      const token = jwt.sign(payload, secret, { expiresIn: "15m" });
      const link = `http://localhost:3000/resetPassword/${userf._id}/${token}`;

      // sendmail(userf.email, link);

      try {
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 587,
          secure: false,
          auth: {
            user: "axupatel1507@gmail.com",
            pass: "akshat123",
          },
        });

        await transporter.sendMail({
          from: '"Reset password" axupatel1507@gmail.com',
          to: userf.email,
          subject: "Reset Password",
          text: link,
        });

        console.log("email sent sucessfully");
      } catch (error) {
        //console.log(error, "email not sent");
        res.send(error, "Server error occured");
      }
      res.send("Reset password link has been send to mail");
    } else {
      res.send("Not registered Email");
      //res.status(400).json({ Error: "Not registered Email" });
    }
  } catch (error) {
    //res.status(500).json({ Error: "Internal Server Error" });
    console.log({ error });
    res.send(error, "Server error occured");
  }
};

const getusers = async (request, response) => {
  const users = await Users.find();
  try {
    response.status(200).json(users);
  } catch (e) {
    response.status(409).json({ message: e.message });
  }
};

const getUserById = async (request, response) => {
  try {
    const user = await Users.findById(request.params.id);
    response.status(200).json(user);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

const editUser = async (request, response) => {
  Users.updateOne({ _id: request.params.id }, request.body).then((result) => {
    response.status(200).json({ message: "Update successful!" });
  });
};

const deleteusers = async (request, response) => {
  try {
    await Users.deleteOne({ _id: request.params.id });
    response.status(201).json("User deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

const addfeedback = async (req, res, next) => {
  const femail = req.body.email;
  const feedback = req.body.feedback;
  // console.log(femail);
  const userExist = await Users.findOne({ email: femail });
  console.log(userExist);
  if (userExist) {
    try {
      const newFeedback = await new Feedback({
        _id: new mongoose.Types.ObjectId(),
        email: femail,
        feedback: feedback,
      });

      const addNewFeedback = await newFeedback.save();

      if (addNewFeedback) {
        res.status(200).json({
          Success: "New feedback added",
        });
      }
    } catch (error) {
      res.status(401).json({
        message: "Something went wrong",
        error: `Error getting data : ${error.message}`,
      });
    }
  } else {
    res.status(500).json({
      Error: "User not found",
    });
  }
};

const deletefeedback = async (req, res) => {
  try {
    await Feedback.deleteOne({ _id: req.params.id });
    res.status(200).json({
      Success: "Feedback is deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: `Error getting data : ${error.message}`,
    });
  }
};

const getfeedback = async (req, res) => {
  try {
    console.log("Feedback Calling");
    const feedbacks = await Feedback.find({});
    console.log(feedbacks);

    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: `Error getting data : ${error.message}`,
    });
  }
};

const getPayment = async (req, res) => {
  try {
    //console.log("Feedback Calling")
    const query = req.query.email;
    const userExist = await Users.findOne({ email: query });
    console.log(userExist);

    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: `Error getting data : ${error.message}`,
    });
  }
};
export {
  ForgotPassword,
  registerUser,
  loginCheck,
  getUserById,
  getusers,
  deleteusers,
  editUser,
  resetPassword,
  addfeedback,
  deletefeedback,
  getfeedback,
  getPayment,
};
