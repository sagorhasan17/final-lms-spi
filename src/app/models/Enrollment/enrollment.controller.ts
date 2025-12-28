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

export const EnrollmentController = {
  createEnrollmentController
};