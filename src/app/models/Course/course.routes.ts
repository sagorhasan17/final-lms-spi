
import express from 'express';
import { CourseController } from './course.controller.js';

const router = express.Router();

router.post('/create-course', CourseController.createCourseController);


export const CourseRoutes = router;