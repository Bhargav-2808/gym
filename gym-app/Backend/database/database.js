const mongoose= require('mongoose');
const URL='mongodb+srv://gym123:gym123@gymdata.yjsro.mongodb.net/gymdata?retryWrites=true&w=majority'
//const URL='mongodb+srv://akshat:akshat123@akshat.rtjdm.mongodb.net/akshat?retryWrites=true&w=majority'

const connection =mongoose.connect(URL,
{
   useNewUrlParser : true,
   useUnifiedTopology: true
}).then(()=>{
    console.log('Connected To Mongoose');
}).catch((err)=>{
    console.log(err+'Something Went Wrong');
})

module.exports=connection;