const mongoose= require('mongoose');
const URL=''

const connection =mongoose.connect(URL,
{
   useNewUrlParser : true,
   useUnifiedTopology: true
}).then(()=>{
    console.log('Connected To Mongoose');
}).catch(()=>{
    console.log('Something Went Wrong');
})

module.exports=connection;