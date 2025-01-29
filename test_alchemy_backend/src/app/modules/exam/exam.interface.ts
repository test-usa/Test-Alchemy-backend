import { Types } from "mongoose";
export interface ExamType {
  id: string;
  questionPaperId: String;
  candidId: String;
  isSubmitted: boolean;
  totalMarks: number;
  acquiredMark: number;
  startTime: Date;
  endTime: Date;
  isDeleted: boolean;
  answerSheet: {
    mcqId: string;
    answer: number;
  }[];
}
