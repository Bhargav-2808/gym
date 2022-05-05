import mongoose from 'mongoose';


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


const feedbackSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    email:{
        type:String,
        unique:true,
        required:true
    },
    feedback:{
        type:String,
    }
})


const Users=mongoose.model('user',userSchema);
const Feedback = mongoose.model('feedback',feedbackSchema);
export  {Users,Feedback};