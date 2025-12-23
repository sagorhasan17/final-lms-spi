import { Types } from 'mongoose';

export interface ILesson {
  courseId: Types.ObjectId;
  title: string;
  content?: string;
  videoUrl?: string;
  duration: number;
  order: number;
  isFreePreview: boolean;
  attachments?: string[];
}
