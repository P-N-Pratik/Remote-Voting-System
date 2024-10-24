
import {Router} from "express";
import { registerUser, loginUser, loginAdmin } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"

const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1

        },
        {
            name: "coverImage",
            maxCount: 1

        }
    ]),
    registerUser);

router.route("/loginVoter").post(loginUser);

router.route("/loginAdmin").post(loginAdmin);




export default router;