import type { ITeacher } from "./teacher.interface.js";
import { TeacherModel } from "./teacher.model.js";

const teacherServices = async (payLoad: ITeacher) => {
  const teacher = await TeacherModel.create(payLoad);
  return teacher;
}

export const TeacherServices = {
  teacherServices,
};