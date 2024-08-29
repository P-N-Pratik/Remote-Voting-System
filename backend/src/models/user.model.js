import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
// import mongooseAgregatepaginate from "mongoose-aggregate-paginate-v2";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema({


    userName : {
        type : String,
        required : true,
        unique : true,
        lowercase :true,
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

    
    fullName : {
        type : String,
        required : true,
        trim :true, 
        // unique:true, 
    },

    avatar:{
        type : String, // cloudinary url
        required :true,
    },
    // coverImage :{
    //     type : String,

    // },

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
    phoneNo : {
        type : Number,
        required : true,
        trim :true, 
        unique:true, 
    },

    address : {
        type : String,
        required : true,
        trim :true, 
        
    },

    state : {
        type : String,
        required : true,
 
    },

    refreshToken :{

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
            username: this.userName

                
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