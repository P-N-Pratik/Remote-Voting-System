import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
// import mongooseAgregatepaginate from "mongoose-aggregate-paginate-v2";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";

const candidateSchema = new mongoose.Schema(
    {
        
        fullName: {
            type : String,
            required : true,
            trim :true,

        },
        partyName: {
            type : String,
            required : true,
            trim :true,

        },
        candidateNo: {
            type : Number,
            required : true,
            trim :true,

        },
        phoneNo: {
            type : Number,
            required : true,
            unique: true

        },
        aadharNo: {

            type : Number,
            required : true,
            trim :true,

        },
        constituencyName: {
            type : String,
            required : true,
            trim :true,

        },
        state: {
            type : String,
            required : true,
            trim :true,

        },
        symbol:{
            type : String, // cloudinary url
            required :true,
        },

    },
    {
        timestamps : true
    }
)
candidateSchema.plugin(mongooseAggregatePaginate)
export const CandidateDetailsLokSabha2024 = mongoose.model("CandidateDetailsLokSabha2024", candidateSchema, "CandidateDetailsLokSabha2024")