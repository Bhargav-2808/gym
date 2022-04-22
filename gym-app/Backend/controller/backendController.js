const Users = require("../model/user");
const nodemailer = require("nodemailer");
// const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const user = require("../model/user");

sendEmail = async (email, text) => {};

exports.registerUser = async (req, res) => {
  let fname = req.body.firstName;
  let lname = req.body.lastName;
  let uname = fname + " " + lname;

  let uemail = req.body.email;
  let num = req.body.mobile;

  let pass = req.body.password;
  let cpass = req.body.cpassword;
  //const user = req.body;
  // console.log(pass);
  // console.log(cpass);

  try {
    let userExist = await Users.findOne({ email: uemail });

    if (userExist) {
      res.status(400).json({ Error: "User Alreay Exist" });
    } else {
      if (pass == cpass) {
        //let salt = bcrypt.genSaltSync(10);
        //let secpass = bcrypt.hashSync(pass, salt);

        let newUser = await new Users({
          _id: new mongoose.Types.ObjectId(),
          name: uname,
          email: uemail,
          mobile: num,
          password: pass,
        });

        let addedUser = await newUser.save();

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

exports.loginCheck = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  try {
    let userf = await Users.findOne({ email: email });

    if (userf) {
      //let comparePassword=await bcrypt.compare(password, user.password);

      if (password === userf.password) {
        res.status(200).json({ Success: "Login Successfull." });
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


exports.resetPassword = async (req, res) => {
  let email = req.body.pemail;
  //console.log(email);
  let Npassword = req.body.Npassword;
    // console.log(Npassword);
  const { id, token } = req.params;

  try {
    let userf = await Users.findOne({ email: email });
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
    let userf = await Users.findOne({ email: email });
    //console.log(userf);
    const secret = JWT_SECRET + userf.password;
    const payload = jwt.verify(token, secret);
    //console.log(payload);

     userf.password = Npassword;
     await userf.save();
    res.send(userf);
    console.log(userf);
  } catch (error) {
    //res.status(500).json({ Error: "Internal Server Error" });
    console.log(error);
  }
  //console.log(Npassword)
};

const JWT_SECRET = "some super secret..";

exports.ForgotPassword = async (req, res) => {
  //console.log(email);

  try {
    const email = req.body.femail;
    console.log(email);
    let userf = await Users.findOne({ email: email });
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
        console.log(error, "email not sent");
      }
      res.send("link has been sent");
    } else {
      res.status(400).json({ Error: "Not registered Email" });
    }
  } catch (error) {
    res.status(500).json({ Error: "Internal Server Error" });
    console.log({ error });
  }
};
