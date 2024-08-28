

import mongoose from "mongoose"

const ECAdmin = mongoose.Schema({

    username :{
        
    }
    ,
    email :{

    }

})

export const ecAdmin = mongoose.model("ecAdmin", ECAdmin, "ecAdmin");