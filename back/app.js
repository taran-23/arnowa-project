const dotenv=require('dotenv');
const express= require('express');

const app=express();

const cors=require('cors');
const cookieParser=require('cookie-parser');

dotenv.config({path:'./config.env'});
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(cookieParser());

 app.use(require('./router/auth'));


const PORT=process.env.PORT;




app.listen(PORT);