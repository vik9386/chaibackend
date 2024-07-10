
import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { DB_NAME } from "./constatnts";
import connectDB from "./db/index.js";

dotenv.config({
    path:"./env"
})

connectDB();









