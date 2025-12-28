import type { IEnrollment } from "./enrollment.interface.js";
import { EnrollmentModel } from "./enrollment.model.js";

const enrollmentServices = async (payLoad: IEnrollment) => {
  const enrollment = await EnrollmentModel.create(payLoad);
  return enrollment;
}

export const EnrollmentServices = {
  enrollmentServices,
};