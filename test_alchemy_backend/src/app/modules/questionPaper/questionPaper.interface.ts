import { Types } from "mongoose";

export type TQuestionPaper = {
  domain: string;
  examineeId: Types.ObjectId;
  duration: string;
  totalMarks: number;
  MCQSet: [];
};
