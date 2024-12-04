"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createProfile = async (userId, data) => {
    return prisma.profile.create({
        data: {
            ...data,
            userId,
        },
    });
};
const getProfileByUserId = async (userId) => {
    return prisma.profile.findUnique({
        where: { userId },
    });
};
const updateProfile = async (userId, data) => {
    return prisma.profile.update({
        where: { userId },
        data,
    });
};
const deleteProfile = async (userId) => {
    return prisma.profile.delete({
        where: { userId },
    });
};
exports.default = {
    createProfile,
    getProfileByUserId,
    updateProfile,
    deleteProfile,
};
