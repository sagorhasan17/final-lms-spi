import { model, Schema } from "mongoose";
import type { IStudent } from "./student.interface.js";

const studentSchema = new Schema<IStudent>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  dateOfBirth: { type: Date },
  gender: { type: String, enum: ["male", "female    ", "other"], required: true },
  education: { type: String, required: true }, // example: BSc in CSE, HSC, etc.
  enrolledCourses: [{ type: Schema.Types.ObjectId, ref: "Course", default: [] }],
  completedCourses: [{ type: Schema.Types.ObjectId, ref: "Course", default: [] }],
  interests: { type: [String], default: [] }, // example: ['Web Dev', 'AI', 'Graphics']
  bio: { type: String },
});

export const StudentModel = model<IStudent>("Student", studentSchema);