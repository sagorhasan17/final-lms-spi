import express from 'express';
import dotenv from 'dotenv';
import { UserRoutes } from './app/models/User/user.routes.js';
import { CourseRoutes } from './app/models/Course/course.routes.js';
import { TeacherRoutes } from './app/models/Teacher/teacher.routes.js';
import { AuthRoutes } from './app/models/Auth/auth.routes.js';
import { EnrollmentRoutes } from './app/models/Enrollment/enrollment.routes.js';
import { StudentRoutes } from './app/models/Student/student.routes.js';

dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Route registrations
app.use('/api/v1/auth', AuthRoutes);
app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/courses', CourseRoutes);
app.use('/api/v1/teachers', TeacherRoutes);
app.use('/api/v1/enrollments', EnrollmentRoutes);
app.use('/api/v1/students', StudentRoutes);




app.get('/', (req, res) => {
  res.send(`This server is properly running on port : ${port}`);
});

export default app;
