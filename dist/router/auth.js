"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = __importDefault(require("../controllers/authController"));
const router = express_1.default.Router();
// Wrap the async controller to handle promise resolution
router.post("/", (req, res, next) => {
    (0, authController_1.default)(req, res).catch(next);
});
exports.default = router;
