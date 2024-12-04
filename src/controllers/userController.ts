import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { User } from "../interface";
const prisma = new PrismaClient();

// export const getAllUsers = async (req: Request, res: Response) => {
//   try {
//     const users = await  prisma.user.findMany();
//     res.json(users);
//   } catch (err : any) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const createUser = async (req: Request, res: Response) => {
//   const { fullName , walletId ,domainId , email , bio , avatar } : User = req.body;

//   // if (!name ) {
//   //    res.status(400).json({ error: "Name and email are required" });
//   // }

//   try {
//     const newUser = await prisma.user.create({
//       data : { fullName , walletId ,domainId , email , bio , avatar },
//     });
//     res.status(201).json(newUser);
//   } catch (err : any) {
//     res.status(500).json({ error: err.message });
//   }
// };
