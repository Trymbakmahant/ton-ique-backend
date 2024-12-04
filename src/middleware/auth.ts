
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export interface AuthenticatedRequest extends Request { 
  user?: JwtPayload | string; // Add `user` to the request type
}

 const verifyTokenMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    // Get the token from cookies
    const token = req.cookies.authToken;
    if (!token) {
       res.status(401).json({ success: false, message: "Unauthorized, token missing" });
    }

    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach the decoded payload to req.user

    next(); // Pass control to the next middleware or route handler
  } catch (error) {
     res.status(403).json({ success: false, message: "Invalid or expired token" });
  }
};


export default verifyTokenMiddleware ;