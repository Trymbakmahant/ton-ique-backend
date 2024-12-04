import express from "express";

import * as profileController from "../controllers/profileController"
import authenticator from "../middleware/auth"
const router = express.Router();


// for over all user data 
 router.get("/", authenticator , profileController.getProfile);
 router.post("/register-user" ,authenticator , profileController.createProfile)
 router.put("update-user", authenticator , profileController.updateProfile) 
 router.delete("delete-user",authenticator, profileController.deleteProfile)






export default router;
