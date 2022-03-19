const Users = require("../model/user")

exports.addUser=async(req,res)=>{
    let fname= req.body.firstName;
    let lname= req.body.lastName;
    let name = fname+" "+lname;

    let email= req.body.email;
    let num= req.body.mobile;

    let pass= req.body.password;
    let cpass= req.body.cpassword;

    try {
        let userExist=await Users.findOne({email});

        if(pass==cpass){}
        
    } catch (error) {
        
    }
}