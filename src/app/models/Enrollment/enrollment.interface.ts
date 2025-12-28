import { Types } from 'mongoose';

export interface IEnrollment{
  studentId: Types.ObjectId;
  courseId: Types.ObjectId;
  enrollmentDate: Date;
  status: 'pending' | 'active' | 'completed' | 'cancelled';
  paymentStatus: 'paid' | 'unpaid' | 'refunded';
  transactionId?: string;
  progress: number;
}
