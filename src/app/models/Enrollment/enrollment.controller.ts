import type { Request, Response } from "express";
import { EnrollmentServices } from "./enrollment.services.js";

const createEnrollmentController = async (req: Request, res: Response) => {
  try {
    const enrollment = await EnrollmentServices.enrollmentServices(req.body);
    res.status(201).json({
      success: true,
      message: "Enrollment created successfully",
      data: enrollment
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create enrollment",
      error: error
    });
  }
}

const getEnrollmentController = async (req: Request, res: Response) => {
  try {
    const enrollment = await EnrollmentServices.getEnrollmentServices();
    res.status(200).json({
      success: true,
      message: 'Enrollment fetched successfully',
      data: enrollment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch enrollment',
      error: (error as Error).message,
    });
  }
};


export const EnrollmentController = {
  createEnrollmentController,
  getEnrollmentController
};