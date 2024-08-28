const asyncHandler = (requestHandler) =>{
    (req,res,next)=>{
        Promise.resolve(requesthandler(req,res,next)).catch((err)=>{
            next(err)
        })
    }
}

export {asyncHandler}