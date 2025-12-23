import { model, Schema } from "mongoose";
import type { ICourse } from "./course.interface.js";


const courseSchema = new Schema<ICourse>({
  courseId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  thumbnail: { type: String, required: true },
  price: { type: Number, required: true },
  discountPrice: { type: Number },
  category: { type: String, required: true },
  tags: { type: [String], default: [] },  
  teacher: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  // lessons: [{ type: Schema.Types.ObjectId, ref: 'Lesson' }],
  totalLessons: { type: Number, default: 0 },
  enrolledStudents: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  totalEnrollments: { type: Number, default: 0 }, 
  duration: { type: String, required: true },
  level: { type: String, enum: ['beginner', 'intermediate', 'advanced'], required: true },
  language: { type: String, required: true },
  requirements: { type: [String], default: [] },
  learningOutcomes: { type: [String], default: [] },
  rating: { type: Number, default: 0 },
  averageRating: { type: Number, default: 0 },
  isPublished: { type: Boolean, default: false },
  status: { type: String, enum: ['draft', 'published', 'archived'], default: 'draft' },
  certificateAvailable: { type: Boolean, default: false },
  accessType: { type: String, enum: ['free', 'paid'], required: true },
  isDeleted: { type: Boolean, default: false },
}, {
  timestamps: true,

})

export const CourseModel = model<ICourse>('Course', courseSchema);  