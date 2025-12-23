import { Types } from 'mongoose';

export interface ITeacher {
  userId: Types.ObjectId; // ref User
  slug: string;
  bio: string;
  designation: string;
  expertise: string[];
  experienceYears: number;
  education?: string[];
  certifications?: string[];
  languages: string[];
  totalCourses: number;
  totalStudents: number;
  rating: number;
  averageRating: number;
  reviewCount: number;
  status: 'pending' | 'approved' | 'rejected';
  isApproved: boolean;
  featured?: boolean;
  isDeleted: boolean;
  joinedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
