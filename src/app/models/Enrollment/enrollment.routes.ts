
import express from 'express';
import { EnrollmentController } from './enrollment.controller.js';

const router = express.Router();

router.post('/create-enrollment', EnrollmentController.createEnrollmentController);


export const EnrollmentRoutes = router;