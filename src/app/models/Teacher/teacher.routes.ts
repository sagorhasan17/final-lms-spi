
import express from 'express';
import { TeacherController } from './teacher.controller.js';

const router = express.Router();

router.post('/create-teacher', TeacherController.createTeacherController);


export const TeacherRoutes = router;