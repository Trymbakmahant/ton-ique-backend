"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const verifyTelegramInitData = (tgData) => {
    try {
        const initData = tgData;
        const botToken = process.env.BOT_TOKEN || ""; // Ensure this is set in your environment
        // Parse initData into key-value pairs
        const data = Object.fromEntries(new URLSearchParams(initData));
        // Validate hash
        const hash = data.hash;
        // Remove the hash key from data
        delete data.hash;
        // Create a sorted query string
        const dataCheckString = Object.keys(data)
            .sort()
            .map((key) => `${key}=${data[key]}`)
            .join("\n");
        // Generate HMAC hash using bot token
        const secretKey = crypto_1.default.createHash("sha256").update(botToken).digest();
        const expectedHash = crypto_1.default.createHmac("sha256", secretKey)
            .update(dataCheckString)
            .digest("hex");
        console.log(hash, expectedHash);
        if (hash === expectedHash) {
            return true;
        }
        return false;
    }
    catch (error) {
        console.error("Error in verifyTelegramInitData middleware:", error.message);
    }
};
exports.default = verifyTelegramInitData;
