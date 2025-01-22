import { TQuestionPaper } from "./questionPaper.interface";
import { QuestionPaperModel } from "./questionPaper.model";

export const getAllQuestionPaperFromDB = () => {
  const result = QuestionPaperModel.find({ isDeleted: false });
  return result;
};

export const getSingleQuestionPaperFromDB = (id: string) => {
  const result = QuestionPaperModel.findOne({ id, isDeleted: false });
  return result;
};

export const createQuestionPaperIntoDB = (payload: TQuestionPaper) => {
  const result = QuestionPaperModel.create(payload);
  return result;
};

export const updateQuestionPaperIntoDB = (id: string, payload: object) => {
  const result = QuestionPaperModel.updateOne(
    { id, isDeleted: false },
    payload
  );
  return result;
};

export const deleteQuestionPaperIntoDB = (id: string) => {
  const result = QuestionPaperModel.updateOne(
    { id, isDeleted: false },
    { isDelete: true }
  );
};
