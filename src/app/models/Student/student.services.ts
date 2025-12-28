
import type { IStudent } from "./student.interface.js";
import { StudentModel } from "./student.model.js";

const createStudentServices = async (payLoad: IStudent) => {
  const enrollment = await StudentModel.create(payLoad);
  return enrollment;
};

export const StudentServices = {
  createStudentServices,
};