import { model, Schema } from "mongoose";
import type { ILesson } from "./lesson.interface.js";


const lessonSchema = new Schema<ILesson>({
  courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  title: { type: String, required: true },
  content: { type: String },
  videoUrl: { type: String },
  pdfLink: { type: String },
  duration: { type: Number, required: true },
  order: { type: Number, required: true },
  isFreePreview: { type: Boolean, default: false },
  attachments: [{ type: String }], 
})

export const LessonModel = model<ILesson>('Lesson', lessonSchema);