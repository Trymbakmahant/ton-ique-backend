"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const requireAdmin = (req, res, next) => {
    const passkey = req.headers["X-Passkey"] ||
        req.query.passkey ||
        req.body.passkey;
    if (passkey === process.env.ADMIN_KEY) {
        return next();
    }
    res.status(403).json({ message: "Forbidden: Incorrect or missing passkey" });
};
exports.default = requireAdmin;
