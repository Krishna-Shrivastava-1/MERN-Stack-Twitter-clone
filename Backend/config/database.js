import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const databaseconnection = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("connected to mongodb")
    }).catch((error)=>{
        console.log('connecting in mongodb error '+error)
    })
}

export default databaseconnection