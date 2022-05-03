import express from 'express';
import cros from 'cors';
import router from './routes/router.js';
import bodyParser from 'body-parser';
import database from './database/database.js';

const app = express();

app.use(cros());
database;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use('/',router);



app.listen(4500,()=>{
    console.log(`Express App Running On http://localhost:4500`);
})