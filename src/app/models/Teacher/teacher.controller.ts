import type { Request, Response } from 'express';
import { TeacherServices } from './teacher.services.js';

const createTeacherController = async (req: Request, res: Response) => {
  try {
    const teacher = await TeacherServices.teacherServices(req.body);
    res.status(201).json({
      success: true,
      message: 'Teacher created successfully',
      data: teacher,
    });
  } catch (e) {
    console.log(e);
  }
};
export const TeacherController = {
  createTeacherController,
};