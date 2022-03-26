const Users = require("../model/user");
const nodemailer = require("nodemailer");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

exports.registerUser=async(req,res)=>{
    let fname= req.body.firstName;
    let lname= req.body.lastName;
    let uname = fname+" "+lname;

    let uemail= req.body.email;
    let num= req.body.mobile;

    let pass= req.body.password;
    let cpass= req.body.cpassword;
    const user = req.body;
    console.log(user);

    try {
        let userExist=await Users.findOne({email:uemail});

        if(userExist){
            res.status(400).json({'Error':'User Alreay Exist'});
        }

        else{
            if(pass==cpass){
                let salt = bcrypt.genSaltSync(10);
                let secpass = bcrypt.hashSync(pass, salt);

                let newUser =await new Users({
                    _id: new mongoose.Types.ObjectId(),
                    name:uname,
                    email:uemail,
                    mobile:num,
                    password:secpass
                })

                let addedUser = await newUser.save();

                if(addedUser){
                    
                    res.status(200).json({'Success':'User Added'})
                }
                else{
                    res.status(500).json({'Error':'Internal Server Error'});
                }
            }

            else{
                res.status(406).json({'Error':'Both Password must be same.'});
            }
        }

    } catch (error) {
        res.status(500).json({"Error":"Internal Server Error"});
        console.log({error});
    }
}

exports.loginCheck=async(req,res)=>{
    let email= req.body.email;
    let password= req.body.password;

    try {
        let user= await Users.findOne({email:email})

        if(user){
            let comparePassword=await bcrypt.compare(password, user.password);

            if(comparePassword){
                res.status(200).json({'Success':'Login Successfull.'});
            }
            else{
                res.status(400).json({'Error':'Login Using Correct Credentials.'});
            }

        }
        else{
            res.status(400).json({'Error':'No User Found.'});
        }
    } catch (error) {
        res.status(500).json({"Error":"Internal Server Error"});
        console.log({error});
    }
}


// const JWT_SECRET= 'some super secret..'

// exports.forgotPassword = async (req,res) =>{
//     const email =req.body.femail;
//     // console.log(email);


//     try {
//         let user= await Users.findOne({email:email})
//         if(user){

//         //create onetime link
//         const user1= await Users.find();
//         const xuser = user1.map(data=>{
//             return data.email;
//         })

//         //console.log(xuser[0]);
//         const secret= JWT_SECRET+Math.random();
//         //console.log(secret);
//         const payload ={
//             email: xuser[0]
//         }

//         const token = jwt.sign(payload,secret,{expiresIn:"15m"})
//         const link = `http://localhost:4500/resetPassword/${token}`

//         console.log(link);
//         res.send("link has been sent");

//         }
//         else{
//             res.status(400).json({'Error':'Not registered Email'});
//         }
//     } catch (error) {
//         res.status(500).json({"Error":"Internal Server Error"});
//         console.log({error});
//     }
// }





// exports.sendEmail = async (email, subject, text) => {
//     try {
//         const transporter = nodemailer.createTransport({
//             host: "smtp.mailtrap.io",
//             port: 2525,
//             auth: {
//               user: "b60b4b7288b921",
//               pass: "89a162a2447a5f"
//             }
//           });

//         await transporter.sendMail({
//             from: process.env.USER,
//             to: email,
//             subject: subject,
//             text: text,
//         });

//         console.log("email sent sucessfully");
//     } catch (error) {
//         console.log(error, "email not sent");
//     }
// };

// module.exports = sendEmail;

