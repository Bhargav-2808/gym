const express = require("express");
const cros = require('cors');
const router = require('./routes/router');
const bodyParser=require('body-parser');
const database = require('./database/database');
const app = express();

app.use(cros());
database;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use('/',router);



app.listen(4500,()=>{
    console.log(`Express App Running On http://localhost:4500`);
})