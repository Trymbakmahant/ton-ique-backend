"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUser = exports.createUser = void 0;
const UserSErvices_1 = __importDefault(require("../services/UserSErvices"));
const createUser = async (req, res) => {
    try {
        const { gender } = req.body;
        const user = await UserSErvices_1.default.createUser({ gender });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
exports.createUser = createUser;
const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserSErvices_1.default.getUserById(id);
        if (!user) {
            res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
exports.getUser = getUser;
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const user = await UserSErvices_1.default.updateUser(id, data);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
exports.updateUser = updateUser;
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await UserSErvices_1.default.deleteUser(id);
        res.status(200).json({ success: true, message: 'User deleted' });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
exports.deleteUser = deleteUser;
