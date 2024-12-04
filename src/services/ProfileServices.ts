import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createProfile = async (userId: string, data: { name: string; dateOfBirth: Date; personality: string; bio: string; images: string[] }) => {
  return prisma.profile.create({
    data: {
      ...data,
      userId,
    },
  });
};

const getProfileByUserId = async (userId: string) => {
  return prisma.profile.findUnique({
    where: { userId },
  });
};

const updateProfile = async (userId: string, data: { name?: string; dateOfBirth?: Date; personality?: string; bio?: string; images?: string[] }) => {
  return prisma.profile.update({
    where: { userId },
    data,
  });
};

const deleteProfile = async (userId: string) => {
  return prisma.profile.delete({
    where: { userId },
  });
};

export default {
  createProfile,
  getProfileByUserId,
  updateProfile,
  deleteProfile,
};
