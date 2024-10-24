import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {User} from "../src/models/user.model.js";


const app = express();


app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}));

app.use(express.json( { limit: "16kb"}));
app.use(express.urlencoded({extended:true, limit : "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());

// routes Import

import userRouter from "./routes/user.routes.js";
import candidateRouter from "./routes/candidate.routes.js";
// routes declaration

app.use("/api/v1/users", userRouter);
app.use("/api/v2/candidates", candidateRouter);


export {app}

