import { Request, Response, NextFunction } from "express";
import crypto from "crypto";

interface AuthenticatedRequest extends Request {
  tgId?: number;
}

/**
 * Middleware to verify Telegram initData and add tgId to req.
 */
const verifyTelegramInitData = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
  try {
    const initData = req.query.initData as string;
    const botToken = process.env.BOT_TOKEN || ""; // Ensure this is set in your environment

    if (!initData || !botToken) {
       res.status(400).json({ success: false, message: "Missing initData or bot token" });

    }

    // Parse initData into key-value pairs
    const data: Record<string, string> = Object.fromEntries(
      new URLSearchParams(initData)
    );

    // Validate hash
    const hash = data.hash;
    if (!hash) {
 res.status(401).json({ success: false, message: "Missing hash in initData" });
    }

    // Remove the hash key from data
    delete data.hash;

    // Create a sorted query string
    const dataCheckString = Object.keys(data)
      .sort()
      .map((key) => `${key}=${data[key]}`)
      .join("\n");

    // Generate HMAC hash using bot token
    const secretKey = crypto.createHash("sha256").update(botToken).digest();
    const expectedHash = crypto.createHmac("sha256", secretKey)
      .update(dataCheckString)
      .digest("hex");

    if (expectedHash !== hash) {
 res.status(403).json({ success: false, message: "Invalid initData hash" });
    }

    // Extract and add tgId to req object
    if (!data.id) {
 res.status(400).json({ success: false, message: "Missing tgId in initData" });
    }

    req.tgId = parseInt(data.id, 10);
    next(); // Proceed to the next middleware or route handler
  } catch (error: any) {
    console.error("Error in verifyTelegramInitData middleware:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export default verifyTelegramInitData;
