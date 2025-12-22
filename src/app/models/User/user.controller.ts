import type { Request, Response } from "express";
import { UserService } from "./user.services.js";


const createUserController = async (req: Request, res: Response) => {
  try {
    const user = await UserService.createUserService(req.body);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  }catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create user",
      error: error instanceof Error ? error.message : String(error),
    });
  } 
}

export const UserController = {
  createUserController,
}