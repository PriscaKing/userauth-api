import express from 'express';
import mongoose from 'mongoose';
import { dbconnection } from './config/db.js';
import 'dotenv/config'
import userRouter from './routes/user-route.js';





//Connect to database
// await mongoose.connect(process.env.MONGO-URL)

const user = express();

//Apply middlewares
user.use(express.json());


//use routes
user.use(userRouter);
dbconnection();



//Listen for incoming requests 
const port = process.env.PORT || 7700; user.listen(port, ()=>{
    console.log(`App listening on port ${port}`);
});