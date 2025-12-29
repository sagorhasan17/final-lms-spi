import type { ILesson } from "./lesson.interface.js";
import { LessonModel } from "./lesson.models.js";


const createLessonService = async (payLoad: ILesson) => {
  const lesson = await LessonModel.create(payLoad);
  return lesson;
}

export const LessonService = {
  createLessonService,
};