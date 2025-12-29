import type { IEnrollment } from './enrollment.interface.js';
import { EnrollmentModel } from './enrollment.model.js';

const enrollmentServices = async (payLoad: IEnrollment) => {
  const enrollment = await EnrollmentModel.create(payLoad);
  return enrollment;
};

const getEnrollmentServices = async () => {
  const enrollment = await EnrollmentModel.find()
    .populate('studentId')
    .populate('courseId');
  return enrollment;
};


export const EnrollmentServices = {
  enrollmentServices,
  getEnrollmentServices,
};
