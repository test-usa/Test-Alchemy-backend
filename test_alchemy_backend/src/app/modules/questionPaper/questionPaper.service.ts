import { TQuestionPaper } from "./questionPaper.interface";
import { QuestionPaperModel } from "./questionPaper.model";

const createQuestionPaperIntoDB = (payload: TQuestionPaper) => {
  const result = QuestionPaperModel.create(payload);
  return result;
};
