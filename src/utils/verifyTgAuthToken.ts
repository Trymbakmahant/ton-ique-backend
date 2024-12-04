import { Request, Response, NextFunction } from "express";
import crypto from "crypto";


const verifyTelegramInitData = (tgData : any) => {
  try {
    const initData =  tgData ;
    const botToken = process.env.BOT_TOKEN || ""; // Ensure this is set in your environment

   

    // Parse initData into key-value pairs
    const data: Record<string, string> = Object.fromEntries(
      new URLSearchParams(initData)
    );

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
    const secretKey = crypto.createHash("sha256").update(botToken).digest();
    const expectedHash = crypto.createHmac("sha256", secretKey)
      .update(dataCheckString)
      .digest("hex");


    console.log(hash , expectedHash) ;
    if(hash === expectedHash){
        return true
    }

    return false 



  } catch (error: any) {
    console.error("Error in verifyTelegramInitData middleware:", error.message);

  }
};

export default verifyTelegramInitData;
