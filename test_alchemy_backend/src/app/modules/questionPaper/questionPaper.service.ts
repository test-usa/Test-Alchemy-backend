import { idFor } from "../../constents";
import idGenerator from "../../util/idGenarator";
import { TMCQ, TQuestionPaper } from "./questionPaper.interface";
import { QuestionPaperModel } from "./questionPaper.model";
import questionPaperUtil from "./questionPaper.util";

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
export const createQuestionPaper = async (
  examineeId: string,
  payload: TQuestionPaper
) => {
  const modifiedQuestionPaperModel =
    idGenerator.asDocumentModel(QuestionPaperModel);
  const questionPaperId = await idGenerator.collectionIdGenerator(
    modifiedQuestionPaperModel,
    idFor.questionPaper
  );
  payload.MCQSet = questionPaperUtil.preSaveMcqDataModifier(
    payload.MCQSet,
    questionPaperId
  );
  payload.id = questionPaperId;
  payload.examineeId = examineeId;
  const result = await QuestionPaperModel.create(payload);
  await questionPaperUtil.totalMarksCalculator(questionPaperId);
  return result;
};

// examinee

export const addMCQIntoQuestionPaper = async (id: string, mcq: TMCQ) => {
  const mcqId = await idGenerator.mcqIdGenerator(id);
  mcq.mcqId = mcqId;
  const result = await QuestionPaperModel.updateOne(
    { id, isDeleted: false },
    {
      $push: { MCQSet: mcq },
    }
  );
  await questionPaperUtil.totalMarksCalculator(id);
  return result;
};

export const removeMCQFromQuestionPaper = async (id: string, mcqId: string) => {
  console.log(id, mcqId);
  const result = await QuestionPaperModel.updateOne(
    { id, isDeleted: false },
    {
      $pull: {
        MCQSet: {
          mcqId,
        },
      },
    }
  );

  await questionPaperUtil.totalMarksCalculator(id);

  return result;
};

export const updateQuestionPaper = async (id: string, payload: any) => {
  const result = await QuestionPaperModel.updateOne(
    { id, isDeleted: false },
    {
      duration: payload.duration,
      MCQSet: payload.MCQSet,
    }
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
  getAllQuestionPaper,
  getQuestionPapersOfExaminee,
  deleteQuestionPaper,
  updateQuestionPaper,
  createQuestionPaper,
  getSingleQuestionPaper,
  addMCQIntoQuestionPaper,
  removeMCQFromQuestionPaper,
};
export default questionPaperService;
