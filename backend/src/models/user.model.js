import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
// import mongooseAgregatepaginate from "mongoose-aggregate-paginate-v2";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema({
    fullName : {
        type : String,
        required : true,
        trim :true,
        // index:true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase :true,
        trim :true,
        
    },
    address : {
        type : String,
        required : true,
        trim :true, 
        // unique:true, 
    },
    state: {
        type:String,
        required: true,
        trim: true
    },
    district: {
        type:String,
        required: true,
        trim: true

    },
    taluka: {
        type:String,
        required: true,
        trim: true
    },
    city: {
        type:String,
        required: true,
        trim: true

    },
    pincode: {
        type:Number,
        required: true,
        trim: true
    },
    municipalCorporation: {
        type:String,
        required: true,
        trim: true
    },
    constituency: {
        type:String,
        required: true,
        trim: true
    },
    avatar:{
        type : String, // cloudinary url
        required :true,
    },
    voterIdNo : {
        type : Number,
        required : true,
        trim :true, 
        unique:true, 
    },
    aadharNo : {
        type : Number,
        required : true,
        trim :true, 
        unique:true, 
    },
    mobileNo : {
        type : Number,
        required : true,
        trim :true, 
        unique:true, 
    },
    refreshToken :{
        type: String
    }
},
{
    timestamps : true
}
)

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();
    this.password =await bcrypt.hash(this.password, 10);
    next();
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            // username: this.userName

                
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn : process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = async function(){
    return jwt.sign(
        {
            _id: this._id,
                
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn : process.env.REFRESH_TOKEN_EXPIRY
        }
    )

}
userSchema.plugin(mongooseAggregatePaginate)

export const User = mongoose.model("Users", userSchema, "Users");