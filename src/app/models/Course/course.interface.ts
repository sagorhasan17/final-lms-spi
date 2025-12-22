import mongoose, { Types } from "mongoose";


export interface ICourse {
  courseId: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  price: number;
  discountPrice?: number;
  category: string;
  tags?: string[];
  teacher: Types.ObjectId; // User (role: teacher)
  lessons: Types.ObjectId[];
  totalLessons: number;
  enrolledStudents: Types.ObjectId[];
  totalEnrollments: number;
  duration: string; // e.g. "10 Hours"
  level: 'beginner' | 'intermediate' | 'advanced';
  language: string;
  requirements?: string[];
  learningOutcomes?: string[];
  rating: number;
  averageRating: number;
  isPublished: boolean;
  status: 'draft' | 'published' | 'archived';
  certificateAvailable?: boolean;
  accessType: 'free' | 'paid';
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
