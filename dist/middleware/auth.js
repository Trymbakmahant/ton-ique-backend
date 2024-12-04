"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
const verifyTokenMiddleware = (req, res, next) => {
    try {
        // Get the token from cookies
        const token = req.cookies.authToken;
        if (!token) {
            res.status(401).json({ success: false, message: "Unauthorized, token missing" });
        }
        // Verify the token
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        req.user = decoded; // Attach the decoded payload to req.user
        next(); // Pass control to the next middleware or route handler
    }
    catch (error) {
        res.status(403).json({ success: false, message: "Invalid or expired token" });
    }
};
exports.default = verifyTokenMiddleware;
