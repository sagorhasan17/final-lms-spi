import type { Request, Response } from 'express';
import { AuthService } from './auth.services.js';

const createAuthController = async (req: Request, res: Response) => {
  try {
    const auth = await AuthService.CreateAuthService(req.body);
    res.status(200).json({
      status: 'success',
      message: 'User logged in successfully',
      data: auth,
    });
  } catch (error: any) {
    res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

export const AuthController = {
  createAuthController,
};
