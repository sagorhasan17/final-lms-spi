import { model, Schema } from "mongoose";
import type { ITeacher } from "./teacher.interface.js";

const teacherSchema = new Schema<ITeacher>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  slug: { type: String, required: true, unique: true },
  bio: { type: String, required: true },
  designation: { type: String, required: true },
  expertise: { type: [String], default: [] },
  experienceYears: { type: Number, required: true },
  education: { type: [String], default: [] },
  certifications: { type: [String], default: [] },
  languages: { type: [String], default: [] },
  totalCourses: { type: Number, default: 0 },
  totalStudents: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  averageRating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  isApproved: { type: Boolean, default: false },
  featured: { type: Boolean, default: false },
  isDeleted: { type: Boolean, default: false },
  joinedAt: { type: Date, default: Date.now },
}, {
  timestamps: true, 

})

export const TeacherModel = model<ITeacher>('Teacher', teacherSchema);