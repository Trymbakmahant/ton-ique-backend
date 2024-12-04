"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const UserSErvices_1 = __importDefault(require("../services/UserSErvices"));
function verifyTelegramInitData(initData) {
    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";
    console.log(initData);
    // Check if data is recent (within 1 hour)
    const currentTime = Math.floor(Date.now() / 1000);
    if (currentTime - parseInt(initData.auth_date) > 3600) {
        return false;
    }
    // Create a sorted list of data fields (excluding 'hash')
    const dataFields = Object.entries(initData)
        .filter(([key]) => key !== "hash")
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([key, value]) => {
        // Handle nested objects like 'user'
        if (typeof value === "object" && value !== null) {
            return Object.entries(value)
                .sort(([a], [b]) => a.localeCompare(b))
                .map(([k, v]) => `${key}.${k}=${v}`)
                .join("\n");
        }
        return `${key}=${value}`;
    })
        .join("\n");
    // Create secret key using SHA-256
    const secretKey = crypto_1.default
        .createHmac("sha256", "WebAppData")
        .update(BOT_TOKEN)
        .digest();
    // Verify hash
    const computedHash = crypto_1.default
        .createHmac("sha256", secretKey)
        .update(dataFields)
        .digest("hex");
    console.log(computedHash);
    return true;
}
const Authenticator = async (req, res) => {
    try {
        const initData = req.body;
        if (!verifyTelegramInitData(initData)) {
            return res.status(401).json({
                success: false,
                message: "Invalid Telegram authentication",
            });
        }
        const user = {
            telegramId: initData.id,
            username: initData.username,
            firstName: initData.first_name,
        };
        const userData = await UserSErvices_1.default.getUserById(String(initData.user.id));
        console.log(userData);
        // Example of user creation (replace with your actual database logic)
        // const newUser = await UserModel.findOrCreate({ telegramId: user.telegramId }, user);
        res.status(200).json({
            success: true,
            user,
            message: "Authentication successful",
        });
    }
    catch (error) {
        console.error("Telegram auth error:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};
exports.default = Authenticator;
