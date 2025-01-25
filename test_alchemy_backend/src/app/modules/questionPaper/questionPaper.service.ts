import { idFor } from "../../constents";
import idGenerator from "../../util/idGenarator";
import { TQuestionPaper } from "./questionPaper.interface";
import { QuestionPaperModel } from "./questionPaper.model";

// candidate
export const getAllQuestionPaper = async () => {
  const result = await QuestionPaperModel.find({ isDeleted: false });
  return result;
};

// examinee
export const getQuestionPapersOfExaminee = async (examineeId: string) => {
  console.log(examineeId);
  const result = await QuestionPaperModel.find({
    examineeId,
    isDeleted: false,
  });
  return result;
};

// candidate
export const getSingleQuestionPaper = async (qid: string) => {
  const result = await QuestionPaperModel.findOne({ qid, isDeleted: false });
  return result;
};

// examinee
export const createQuestionPaper = async (examineeId:string ,payload: TQuestionPaper) => {
  const modifiedQuestionPaperModel = idGenerator.asDocumentModel(QuestionPaperModel);
  const questionPaperId = await idGenerator.collectionIdGenerator( modifiedQuestionPaperModel, idFor.questionPaper);

  

  payload.id = questionPaperId;
  payload.examineeId = examineeId;
    // const result = await QuestionPaperModel.create(payload);
  // return result;
};

// examinee
export const updateQuestionPaper = async (
  qid: string,
  payload: object
) => {
  console.log(qid);
  const result = await QuestionPaperModel.updateOne(
    { qid, isDeleted: false },
    payload
  );
  return result;
};

// examinee
export const deleteQuestionPaper = async (qid: string) => {
  const result = await QuestionPaperModel.updateOne(
    { qid, isDeleted: false },
    { isDeleted: true }
  );
  return result;
};

const questionPaperService = {
  getAllQuestionPaper,getQuestionPapersOfExaminee,deleteQuestionPaper,updateQuestionPaper,createQuestionPaper,getSingleQuestionPaper
}
export default questionPaperService;
