import express from "express";
import * as  partnerController from "../controllers/partnerController";

import authenticator from "../middleware/auth"
const router = express.Router();

 router.get("/", authenticator , partnerController.fetchPartnerById);
 router.post("/register-user" ,authenticator , partnerController.createPartner)
 router.put("update-user", authenticator , partnerController.updatePartner) 

// router.post("/", createUser);

export default router;
