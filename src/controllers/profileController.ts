import { Request, Response } from 'express';
import profileService from '../services/ProfileServices';

const createProfile = async (req: Request, res: Response) => {
  try {
    const { userId, name, dateOfBirth, personality, bio, images } = req.body;
    const profile = await profileService.createProfile(userId, { name, dateOfBirth, personality, bio, images });
 res.status(201).json(profile);
  } catch (error : any) {
 res.status(500).json({ success: false, message: error.message });
  }
};

const getProfile = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const profile = await profileService.getProfileByUserId(userId);
    if (!profile) {
 res.status(404).json({ success: false, message: 'Profile not found' });
    }
 res.status(200).json(profile);
  } catch (error : any) {
 res.status(500).json({ success: false, message: error.message });
  }
};

const updateProfile = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const data = req.body;
    const profile = await profileService.updateProfile(userId, data);
 res.status(200).json(profile);
  } catch (error : any) {
     res.status(500).json({ success: false, message: error.message });
  }
};

const deleteProfile = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    await profileService.deleteProfile(userId);
 res.status(200).json({ success: true, message: 'Profile deleted' });
  } catch (error : any) {
 res.status(500).json({ success: false, message: error.message });
  }
};

export  {
  createProfile,
  getProfile,
  updateProfile,
  deleteProfile,
};
