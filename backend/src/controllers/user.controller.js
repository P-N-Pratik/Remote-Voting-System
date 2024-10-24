import {asyncHandler} from "../utils/asyncHandler.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";
import {User} from "../models/user.model.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { CandidateDetailsLokSabha2024 } from "../models/candidateDetailsLokSabha2024.model.js";



const generateAccessAndRefereshTokens = async(userId) =>{
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}


    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}

const registerUser = asyncHandler( async (req,res) => {
    console.log(req.body);
    const {fullName, email, address, state, district, taluka, city, pincode, municipalCorporation, constituency, voterIdNo, aadharNo, mobileNo} = req.body;
    console.log(email);

    if([fullName, email, address, state, district, taluka, city, pincode, municipalCorporation, constituency, voterIdNo, aadharNo, mobileNo].some((field)=>{field?.trim === ""})){
        throw new ApiError(400, "All fields are required")
        // return res.send("All fields are required");
    }

    console.log("Done");
    const existedUser = await User.findOne({
        $or: [{email},{voterIdNo},{aadharNo}]
    })
    // console.log("existedUser: ",existedUser)
    

    if(existedUser){
        throw new ApiError(409, "User with userName or email Already Exists");
        // return res.send("User with userName or email Already Exists");
    }

    console.log("Done 1");

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
    console.log("Done 2 ");

  
    const user = await User.create({
        fullName,
        email,
        address,
        state,
        district,
        taluka,
        city,
        pincode: Number(pincode),
        municipalCorporation,
        constituency,
        voterIdNo: Number(voterIdNo),
        aadharNo: Number(aadharNo),
        mobileNo: Number(mobileNo),
        avatar: avatar.url
        // coverImage: coverImage?.url || "";
    });

    console.log("Done 3");


    const createdUser = await User.findById(user._id).select(
        "-refreshToken "
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
    console.log(req.body)

    const {nameAsPerVoterId,voterIdNo} = req.body;

    if([nameAsPerVoterId, voterIdNo].some((field)=> field.trim === "")){
        throw new ApiError(400, "Name or VoterId is Invalid");
    }

    const user = await User.findOne({voterIdNo});

    if(!user){
        // throw new ApiError(400, "You are not yet Registered By the Election Board");
        return res.json( 
            new ApiResponse(
                400, 
                "InValid Credentials"
            )
         )
    }

    const {accessToken, refreshToken} = await generateAccessAndRefereshTokens(user._id);
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");


    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200, 
            {
                user: loggedInUser, accessToken, refreshToken
            },
            "User logged In Successfully"
        )
    )

    // return res.status(201).json(
    //     new ApiResponse(200, doesExist,"User Logged In SuccessFully")
    // )

    // res.status(200).json({
    //     message:"ok"
    // })
})


const loginAdmin = asyncHandler(async (req, res)=>{

    const {username, password} = req.body;
    console.log(req.body)

    if([username, password].some((field)=> field.trim === "")){
        throw new ApiError(400, "All fields are required")
    }

    // const doesAdminExist = await ecAdmin({adminName, adminPassword});
    // if(!doesAdminExist){
    //     throw new ApiError(400, "Not an Authorised User")
    // }

    const candidates = await CandidateDetailsLokSabha2024.find({});
    console.log(candidates);

    return res.status(200).json(
        new ApiResponse(200,
            {
                candidates : candidates
            },
            "Admin Logged In SuccessFully"),
        
    )

    // res.status(200).json({
    //     message:"ok"
    // })
})
export {registerUser, loginUser, loginAdmin};