import {asyncHandler} from "../utils/asyncHandler.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";
import {CandidateDetailsLokSabha2024} from "../models/candidateDetailsLokSabha2024.model.js" 
import {ApiResponse} from "../utils/ApiResponse.js";
import {ApiError} from "../utils/ApiError.js";

const registerLokSabhaCandidate = asyncHandler(
    async(req,res) => {
        console.log("loksabha");
        const{ fullName, partyName, candidateNo, phoneNo, aadharNo, constituencyName, state} = req.body;
        // console.log(fullName);
        // console.log('Headers:', req.headers);
        console.log('Body:', req.body);
        console.log('Files:', req.files);


        if([fullName, partyName, candidateNo, phoneNo, aadharNo, constituencyName, state].some((field)=>{field?.trim === ""})){
            throw new ApiError(400, "All fields are required")
            // return res.send("All fields are required");
        }


        const existedCandidate = await CandidateDetailsLokSabha2024.findOne({
            $or: [{partyName},{aadharNo},{candidateNo}]
        })

        if(existedCandidate){
            throw new ApiError(409, "User with PartyName or aadhaar No or Candidate No Already Exists");
            // return res.send("User with userName or email Already Exists");
        }

        const symbolLocalPath = req.files?.symbol[0]?.path;
        if(!symbolLocalPath){
            throw new ApiError(400, "Symbol file is required 1");
        }

        const symbol = await uploadOnCloudinary(symbolLocalPath);

        if(!symbol){
            throw new ApiError(400, "Symbol file is required");
        }

        const candidate = await CandidateDetailsLokSabha2024.create({
            fullName, 
            partyName, 
            candidateNo : Number(candidateNo), 
            phoneNo : Number(phoneNo), 
            aadharNo: Number(aadharNo), 
            constituencyName, 
            state,
            symbol:symbol.url
            // coverImage: coverImage?.url || "";
        });

        const createdCandidate = await CandidateDetailsLokSabha2024.findById(candidate._id)

        
        if(!createdCandidate){
            throw new ApiError(500, "Something Went Wrong While Registering The Candidate");
            // return res.send("Something Went Wrong While Registering The User");
        }

        return res.status(201).json(
            new ApiResponse(200, createdCandidate, "Candidate Registered SuccessFully")
            // createdUser
        )


    }
)

const registerVidhanSabhaCandidate = asyncHandler(
    async(req, res) => {

    }
)




const registerPanchayatCandidate = asyncHandler(
    async(req, res) => {

    }
)

export {registerLokSabhaCandidate, registerVidhanSabhaCandidate, registerPanchayatCandidate };
