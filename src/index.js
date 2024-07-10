
import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constatnts";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path:"./env"
})

connectDB()
.then(()=>{

    app.on("error",(error)=>{
        console.log("Error ",error)
        throw error;
    })

    app.listen(process.env.PORT || 3000,()=>{
        console.log(`server is running on port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!!",err)
})






