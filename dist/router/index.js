"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./user"));
const profile_1 = __importDefault(require("./profile"));
const partner_1 = __importDefault(require("./partner"));
const auth_1 = __importDefault(require("./auth"));
const app = (0, express_1.default)();
app.use("/user", user_1.default);
app.use("/partner", partner_1.default);
app.use("/profile", profile_1.default);
app.use("/auth", auth_1.default);
exports.default = app;
