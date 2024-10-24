
import {Router} from "express";
import {registerLokSabhaCandidate, registerVidhanSabhaCandidate, registerPanchayatCandidate} from "../controllers/candidate.controller.js";
import {upload} from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/loksabha").post(
    upload.fields(
        [
            {
                name : "symbol",
                maxCount : 1
            }
            // {
            //     name: "coverImage",
            //     maxCount: 1
    
            // }
        ]
    ), 
    registerLokSabhaCandidate
);

router.route("/vidhansabha").post(
    // upload.fields(
    //     [
    //         {
    //             name : "symbol",
    //             maxCount : 1
    //         }
    //     ]
    // ),
    registerVidhanSabhaCandidate
);

router.route("/panchayat").post(
    // upload.fields(
    //     [
    //         {
    //             name : "symbol",
    //             maxCount : 1
    //         }
    //     ]
    // ),
    registerPanchayatCandidate
);

export default router;