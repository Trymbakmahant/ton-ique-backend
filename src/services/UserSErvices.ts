import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createUser = async (data: { gender: string }) => {
  return prisma.user.create({
    data,
  });
};

const getUserById = async (id: string) => {
  return prisma.user.findUnique({
    where: { id },
    include: {
      profile: true,
      experiences: true,
    },
  });
};

const updateUser = async (id: string, data: { gender?: string }) => {
  return prisma.user.update({
    where: { id },
    data,
  });
};

const deleteUser = async (id: string) => {
  return prisma.user.delete({
    where: { id },
  });
};

export default {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
