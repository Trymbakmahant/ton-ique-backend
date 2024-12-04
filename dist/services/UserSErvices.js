"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createUser = async (data) => {
    return prisma.user.create({
        data,
    });
};
const getUserById = async (id) => {
    return prisma.user.findUnique({
        where: { id },
        include: {
            profile: true,
            experiences: true,
        },
    });
};
const updateUser = async (id, data) => {
    return prisma.user.update({
        where: { id },
        data,
    });
};
const deleteUser = async (id) => {
    return prisma.user.delete({
        where: { id },
    });
};
exports.default = {
    createUser,
    getUserById,
    updateUser,
    deleteUser,
};
