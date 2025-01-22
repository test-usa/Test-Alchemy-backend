import { model, Schema } from "mongoose";
import { TQuestionPaper } from "./questionPaper.interface";

const questionPaperSchema = new Schema<TQuestionPaper>({
  domain: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  totalMarks: {
    type: Number,
    required: true,
  },
  MCQSet: {
    type: [],
    required: true,
  },
});

export const QuestionPaperModel = model<TQuestionPaper>(
  "QuestionPaper",
  questionPaperSchema
);
