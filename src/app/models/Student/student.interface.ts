import { Types } from 'mongoose';

export interface IStudent {
  userId: Types.ObjectId;
  dateOfBirth?: Date;
  gender: 'male' | 'female' | 'other';
  education: string; // example: BSc in CSE, HSC, etc.
  enrolledCourses: Types.ObjectId[];
  completedCourses: Types.ObjectId[];
  interests: string[]; // example: ['Web Dev', 'AI', 'Graphics']
  bio?: string;
}
