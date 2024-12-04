import { Request, Response, NextFunction } from "express";


const requireAdmin = (req: Request, res: Response, next: NextFunction): void => {
  const passkey =
    req.headers["X-Passkey"] as string ||
    req.query.passkey as string ||
    req.body.passkey as string;

  if (passkey === process.env.ADMIN_KEY) {
    return next(); // Passkey is correct, proceed to the route handler
  }

  // Passkey is incorrect or missing
  res.status(403).json({ message: "Forbidden: Incorrect or missing passkey" });
};

export default requireAdmin;
