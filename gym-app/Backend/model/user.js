const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true
    },
    mobile:{
        type:String,
    },
    password:{
        type:String,
    }
})
module.exports=mongoose.model('users',userSchema);