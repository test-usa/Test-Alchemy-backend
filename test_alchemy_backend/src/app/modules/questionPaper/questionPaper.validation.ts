import { z } from "zod";
import { Types } from "mongoose";

// MCQ Schema
const TMCQSchema = z.object({
  QPid: z.string(),
  mcqId: z.string().optional(),
  question: z.string(),
  options: z
    .array(z.string())
    .nonempty({ message: "MCQ options must not be empty" }) // Added message for empty options
    .min(2, { message: "MCQ options must have at least two options" }),
  correctAns: z.number().refine((val) => [0, 1, 2, 3].includes(val)),
  mark: z.number().min(1, "Mark must be greater than 0"),
});

// Question Paper Schema
export const TQuestionPaperSchema = z.object({
  body: z.object({
    id: z.string(),
    domain: z.string().nonempty({ message: "Domain must not be empty" }), // Added validation for non-empty domain
    examineeId: z.string().optional(),
    duration: z.number().min(1, "Duration must be a positive number"),
    totalMarks: z.number().optional(),
    MCQSet: z
      .array(TMCQSchema) // Ensure this is an array of TMCQSchema objects
      .nonempty({ message: "Question paper must have at least one question" }),
    isDeleted: z.boolean().default(false),
  }),
});
