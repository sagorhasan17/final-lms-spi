import type { Request, Response } from 'express';
import { LessonService } from './lesson.services.js';

const createLessonController = async (req: Request, res: Response) => {
  try {
    const lesson = await LessonService.createLessonService(req.body);
    res.status(201).json({
      success: true,
      message: 'Lesson created successfully',
      data: lesson,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: (error as Error).message,
    });
  }
};


export const LessonController = {
  createLessonController,
}