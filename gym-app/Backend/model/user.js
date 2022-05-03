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
const user=mongoose.model('user',userSchema);
export default user;