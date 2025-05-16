import express  from "express";
import dotenv from "dotenv"
import { connectDB } from "./db";
import todoRoute from "./Routes/Todo"
import gettodo from './Routes/Todo'
import cors from 'cors'


dotenv.config({
    path : ".env"
})
const app = express()
app.use(cors({
   origin :process.env.CLIENT_URL
}))
app.use(express.json())

app.use('/api/',todoRoute)


const PORT = process.env.PORT || "4000"

app.listen(PORT,()=>{
    connectDB()
    console.log("server is running on"+PORT)
})

