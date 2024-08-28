
import dotenv from "dotenv";
import connectionDB from "./db/index.js";
import {app} from '../src/app.js'

// ---------------------------------------------------------------------------------------------
// Exportation of Models Only

import {User} from './models/user.model.js'
// ---------------------------------------------------------------------------------------------
dotenv.config({
    path : './.env'
})

connectionDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is Running at Port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO DB Connection Failed", err);
})







/*

import mongoose from "mongoose";
import {DB_NAME} from "./constants";
;( async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    }catch(error){
        console.log("ERROR:", error );
        throw error
    }
} )()

*/