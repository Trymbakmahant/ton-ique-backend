import express from "express";
import * as userController from "../controllers/userController";
import * as profileController from "../controllers/profileController"
import authenticator from "../middleware/auth"
const router = express.Router();


// for over all user data 
 router.get("/", authenticator , userController.getUser);
 router.post("/register-user" ,authenticator , userController.createUser)
 router.put("update-user", authenticator , userController.updateUser) 
 router.delete("delete-user",authenticator, userController.deleteUser)






export default router;
