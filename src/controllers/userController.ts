import { Request, Response } from 'express';
import userService from '../services/UserSErvices';

const createUser = async (req: Request, res: Response) => {
  try {
    const { gender } = req.body;
    const user = await userService.createUser({ gender });
     res.status(201).json(user);
  } catch (error : any) {
     res.status(500).json({ success: false, message: error.message });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    if (!user) {
       res.status(404).json({ success: false, message: 'User not found' });
    }
     res.status(200).json(user);
  } catch (error : any) {
     res.status(500).json({ success: false, message: error.message });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const user = await userService.updateUser(id, data);
     res.status(200).json(user);
  } catch (error : any) {
     res.status(500).json({ success: false, message: error.message });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await userService.deleteUser(id);
     res.status(200).json({ success: true, message: 'User deleted' });
  } catch (error : any) {
     res.status(500).json({ success: false, message: error.message });
  }
};

export  {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
