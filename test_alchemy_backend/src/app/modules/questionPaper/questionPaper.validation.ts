import { z } from "zod";
import { Types } from "mongoose";

// MCQ Schema
const TMCQSchema = z.object({
  QPid: z.string(),
  mcqId: z.string().optional(),
  question: z.string(),
  options: z
    .array(z.string())
    .nonempty()
    .min(2, { message: "MCQ options must have at least two options" }),
  correctAns: z.enum([0, 1, 2, 3]),
  mark: z.number().min(1, "Mark must be greater than 0"),
});

// Question Paper Schema
export const TQuestionPaperSchema = z.object({
  id: z.string(),
  domain: z.string(),
  examineeId: z.string().refine((val) => Types.ObjectId.isValid(val), {
    message: "Invalid ObjectId format",
  }),
  duration: z.number().min(1, "Duration must be a positive number"),
  totalMarks: z.number().optional(),
  MCQSet: z
    .array(TMCQSchema) // Ensure this is an array of TMCQSchema objects
    .nonempty({ message: "Question paper must have at least one question" }),
  isDeleted: z.boolean(),
});
