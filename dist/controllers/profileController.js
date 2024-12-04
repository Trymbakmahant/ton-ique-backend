"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProfile = exports.updateProfile = exports.getProfile = exports.createProfile = void 0;
const ProfileServices_1 = __importDefault(require("../services/ProfileServices"));
const createProfile = async (req, res) => {
    try {
        const { userId, name, dateOfBirth, personality, bio, images } = req.body;
        const profile = await ProfileServices_1.default.createProfile(userId, { name, dateOfBirth, personality, bio, images });
        res.status(201).json(profile);
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
exports.createProfile = createProfile;
const getProfile = async (req, res) => {
    try {
        const { userId } = req.params;
        const profile = await ProfileServices_1.default.getProfileByUserId(userId);
        if (!profile) {
            res.status(404).json({ success: false, message: 'Profile not found' });
        }
        res.status(200).json(profile);
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
exports.getProfile = getProfile;
const updateProfile = async (req, res) => {
    try {
        const { userId } = req.params;
        const data = req.body;
        const profile = await ProfileServices_1.default.updateProfile(userId, data);
        res.status(200).json(profile);
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
exports.updateProfile = updateProfile;
const deleteProfile = async (req, res) => {
    try {
        const { userId } = req.params;
        await ProfileServices_1.default.deleteProfile(userId);
        res.status(200).json({ success: true, message: 'Profile deleted' });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
exports.deleteProfile = deleteProfile;
