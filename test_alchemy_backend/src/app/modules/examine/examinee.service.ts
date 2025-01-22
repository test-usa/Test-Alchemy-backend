import { ExamineeModel } from "./examinee.model";

export const addQuestionPaperInExamineeDocument = async (uid: string) => {
  const result = await ExamineeModel.updateOne({ uid });
  return result;
};

export const updateQuestionPaperInExamineeDocument = () => {
  const result = "";
  return result;
};

export const deleteQuestionPaperInExamineeDocument = () => {
  const result = "";
  return result;
};
