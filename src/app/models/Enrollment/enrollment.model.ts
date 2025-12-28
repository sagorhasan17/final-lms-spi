import { model, Schema } from "mongoose";
import type { IEnrollment } from "./enrollment.interface.js";

const enrollmentSchema = new Schema<IEnrollment>({
  studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  courseId: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
  enrollmentDate: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'active', 'completed', 'cancelled'], default: 'pending' },
  paymentStatus: { type: String, enum: ['paid', 'unpaid', 'refunded'], default: 'unpaid' },
  transactionId: { type: String },
  progress: { type: Number, default: 0 },
})

export const EnrollmentModel = model<IEnrollment>('Enrollment', enrollmentSchema);  