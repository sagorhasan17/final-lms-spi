import type { Request, Response } from "express";
import { StudentServices } from "./student.services.js";

const createStudentController = async (req: Request, res: Response) => {
  try {
    const student = await StudentServices.createStudentServices(req.body);
    res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: student
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create student",
      error: error
    });
  }
}

export const StudentController = {
  createStudentController,
};