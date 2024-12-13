import express, { json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import databaseconnection from './config/database.js'
import cookieParser from 'cookie-parser'
import userRoute from './routes/userRoute.js'
import tweetRoute from './routes/tweetRoute.js'

databaseconnection()
const app = express()


// middlewares 
app.use(express.urlencoded({
    extends:true
}))
app.use(express.json())

dotenv.config()
app.use(cookieParser())
app.use(cors())

// API
app.use("/api/v1/user",userRoute)
app.use("/api/v1/tweet",tweetRoute)


// app.get('/home',(req,res)=>{
//     res.status(200).json({
//         message:'comming from backend'
//     })
// })


app.listen(process.env.PORT,()=>{
    console.log("Server is started "+process.env.PORT )
})