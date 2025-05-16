import mongoose from "mongoose"

export const connectDB = async()=>{
    try {
        let DB_CONNECTION_STRING: string = ""
        if(process.env.NODE_ENV=="development"){
            DB_CONNECTION_STRING = process.env.MONGODB_LOCAL_URL!
        }else if(process.env.NODE_ENV=="production"){
            DB_CONNECTION_STRING= process.env.MONGODB_URL!
        }
        const dbResponse = await mongoose.connect(DB_CONNECTION_STRING)
        console.log("DB connection Successfully",dbResponse.connection.host)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}