
import mongoose from 'mongoose';
import 'dotenv/config';



const MONGO_URL = process.env.MONGO_URL

export const dbconnection = () =>
mongoose.connect(MONGO_URL).then(()=>{
    console.log('Database of users connected');
 });

