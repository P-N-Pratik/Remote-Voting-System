import {asyncHandler} from "../utils/asyncHandler.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";
import {User} from "../models/user.model.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";


const registerUser = asyncHandler( async (req,res) => {
    const {userName, email, fullName, voterIdNo, aadharNo, phoneNo, address, state, refreshToken} = req.body;
    console.log(email);

    if([userName,email, fullName, voterIdNo, aadharNo, phoneNo, address, state].some((field)=>{field?.trim === ""})){
        throw new ApiError(400, "All fields are required")
        // return res.send("All fields are required");
    }

    const existedUser = await User.findOne({
        $or: [{userName},{email}]
    })
    console.log("existedUser: ",existedUser)
    

    if(existedUser){
        throw new ApiError(409, "User with userName or email Already Exists");
        // return res.send("User with userName or email Already Exists");
    }

    const avatarLocalPath = req.files?.avatar[0]?.path;
    // const coverImageLocalPath = req.file?.coverImage[0]?.path;

    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar file is required");
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath);
    // const coverImage = await uploadOnCloudinary(coverImageLocalPath);

    if(!avatar){
        throw new ApiError(400, "Avatar file is required");
    }

    const user = await User.create({
        userName,
        email,
        fullName,
        voterIdNo,
        aadharNo,
        phoneNo,
        address,
        state,
        avatar:avatar.url
        // coverImage: coverImage?.url || "";
    });

    const createdUser = await User.findById(user._id).select(
        "-refreshToken -password"
    )

    if(!createdUser){
        throw new ApiError(500, "Something Went Wrong While Registering The User");
        // return res.send("Something Went Wrong While Registering The User");
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser,"User Registered SuccessFully")
    )



    
    // res.status(200).json({
    //     message: "ok"
    // })
});

const loginUser = asyncHandler(async (req, res)=>{

    const {nameAsPerVoterId,voterIdNo} = req.body;

    if([nameAsPerVoterId, voterIdNo].some((field)=> field.trim === "")){
        throw new ApiError(400, "Name or VoterId is Invalid");
    }

    const doesExist = await User.findOne({voterIdNo});

    if(!doesExist){
        throw new ApiError(400, "You are not yet Registered By the Election Board");
    }

    return res.status(201).json(
        new ApiResponse(200, doesExist,"User Logged In SuccessFully")
    )

    // res.status(200).json({
    //     message:"ok"
    // })
})


const loginAdmin = asyncHandler(async (req, res)=>{

    const {adminName, adminPassword} = req.body;

    if([adminName, adminPassword].some((field)=> field.trim === "")){
        throw new ApiError(400, "All fields are required")
    }

    const doesAdminExist = await ecAdmin({adminName, adminPassword});
    if(!doesAdminExist){
        throw new ApiError(400, "Not an Authorised User")
    }

    return res.status(201).json(
        new ApiResponse(200, doesAdminExist,"Admin Logged In SuccessFully")
    )

    // res.status(200).json({
    //     message:"ok"
    // })
})
export {registerUser, loginUser, loginAdmin};