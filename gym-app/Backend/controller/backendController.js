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
            // res.redirect('/');
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
                    // res.redirect("/");
                }
                else{
                    res.status(500).json({'Error':'Internal Server Error'});
                    // res.redirect('/');
                }
            }
            
            else{
                res.status(406).json({'Error':'Both Password must be same.'});
                // res.redirect('/');
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
                // res.redirect("/");
            }
            else{
                res.status(400).json({'Error':'Login Using Correct Credentials.'});
                // res.redirect("/");
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


const JWT_SECRET= 'some super secret..'

exports.resetPassword = async (req,res) =>{
    const email =req.body.femail;
    //console.log(email);
        const  password = Users.find();
       console.log(password);
    try {
        let user= await Users.findOne({email:email})
        if(user){
            
        //create onetime link
        
        const secret= JWT_SECRET;
            
        }
        else{
            res.status(400).json({'Error':'Not registered Email'});
        }
    } catch (error) {
        res.status(500).json({"Error":"Internal Server Error"});
        console.log({error});
    }
}



var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b60b4b7288b921",
      pass: "89a162a2447a5f"
    }
  });