import express from 'express';
import cors from 'cors';
import {route} from './routes/router.js';
import bodyParser from 'body-parser';
import database from './database/database.js';

const app = express();

app.use(cors());
database;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use('/',route);




app.listen(4500,()=>{
    console.log(`Express App Running On http://localhost:4500`);
})