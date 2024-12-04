import express, { Request, Response, NextFunction } from "express";
import authController from "../controllers/authController";

const router = express.Router();

// Wrap the async controller to handle promise resolution
router.post("/", (req: Request, res: Response, next: NextFunction) => {
  authController(req, res).catch(next);
});

export default router;
