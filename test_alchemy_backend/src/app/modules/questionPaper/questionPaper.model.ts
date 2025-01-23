import mongoose, { model, Schema } from "mongoose";
import { TMCQ, TQuestionPaper } from "./questionPaper.interface";

const TMCQSchema: Schema = new Schema({
  qid: {
    type: mongoose.Types.ObjectId,
    ref: "QuestionPaper",
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  correctAns: {
    type: Number,
    enum: [0, 1, 2, 3],
    required: true,
  },
  mark: {
    type: Number,
    required: true,
  },
});

const questionPaperSchema = new Schema<TQuestionPaper>(
  {
    domain: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    totalMarks: {
      type: Number,
    },
    MCQSet: {
      type: [TMCQSchema],
      required: true,
    },
    examineeId: {
      type: Schema.Types.ObjectId,
      ref: "Exam",
      required: true,
    },
    qid: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: String,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

questionPaperSchema.post("save", () => {});

export const QuestionPaperModel = model<TQuestionPaper>(
  "QuestionPaper",
  questionPaperSchema
);
