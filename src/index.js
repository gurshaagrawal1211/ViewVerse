//require('dotenv').config({path:'./env'})
//import dotenv from "dotenv";


// dotenv.config({
//     path:'./env'
// })
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
.then(() => {
    app.on("error",()=>{
        console.log("Application is not able to talk to database",error)
        throw error
    })
    const port = process.env.PORT || 8000
    app.listen(port, () => {
        console.log(`Server is running at port : ${port}`)
    })
})
.catch((err) => {
    console.log("MONGODB CONNECTION ERROR", err)
})

/*
import express from "express"
const app=express()

;( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",()=>{
            console.log("Application is not able to talk to database",error)
            throw error
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.log("ERROR:", error)
        throw error
    }
})()
*/