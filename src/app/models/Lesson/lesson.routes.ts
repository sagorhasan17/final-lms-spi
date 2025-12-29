import express from 'express';
import { LessonController } from './lesson.controller.js';

const router = express.Router();

router.post('/create-lesson', LessonController.createLessonController);

export const LessonRoutes = router;
