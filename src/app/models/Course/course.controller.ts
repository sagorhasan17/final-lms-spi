import type { Request, Response } from 'express';
import { CourseService } from './course.services.js';

const createCourseController = async (req: Request, res: Response) => {
  try {
    const course = await CourseService.createCourseService(req.body);
    res.status(201).json({
      success: true,
      message: 'Course created successfully',
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create course',
      error: (error as Error).message,
    });
  }
};

export const CourseController = {
  createCourseController,
};
