import { idFor } from "../../constents";
import { isExamWithinDuration } from "../../util/checkDuration";
import idGenerator from "../../util/idGenarator";
import { QuestionPaperModel } from "../questionPaper/questionPaper.model";
import { examModel } from "./exam.model";

export const startExam = async (payload: object) => {
  const modifyModel = idGenerator.asDocumentModel(examModel);
  const generatedId = await idGenerator.collectionIdGenerator(
    modifyModel,
    idFor.exam
  );
  const exam = await examModel.create({
    id: generatedId,
    ...payload,
  });
  const questionPaper = await QuestionPaperModel.findOne({
    id: exam.questionPaperId,
  }).select({
    __v:0,
    createdAt:0,
    updatedAt:0,
    answerSheet:0,
    _id:0,
    acquiredMark:0,
    isDeleted:0,
  });

  return {
    exam,
    mcq: questionPaper?.MCQSet.map((e) => {
      return {
        id: e.mcqId,
        question: e.question,
        options: e.options,
        mark: e.mark,
      };
    }),
  };
};

export const endExam = async (id: string, payload: object) => {
  const exam = await examModel.findOneAndUpdate(
    {
      id,
    },
    payload,
    {
      new: true,
    }
  );
  if (!exam) {
    throw new Error("Exam not found");
  }
  const questionPaper = await QuestionPaperModel.findOne({
    id: exam.questionPaperId,
  });
  if (
    !isExamWithinDuration(
      `${exam?.startTime}`,
      `${exam?.endTime}`,
      questionPaper?.duration ? questionPaper.duration : 0
    )
  )
    throw new Error("Time exceeded");
  if (!questionPaper) {
    throw new Error("Question paper not found");
  }
  const { answerSheet } = exam;

  let acquiredMark = 0;
  const reportSheet: {
    questionId: string;
    correctAnswer: number;
    studentAnswer: number | null;
  }[] = [];

  questionPaper.MCQSet.map((answer) => {
    const mcq = answerSheet.filter(
      (e) => e.mcqId === answer.mcqId && e.answer === answer.correctAns
    );
    const wrongMcq = answerSheet.filter(
      (e) => e.mcqId === answer.mcqId && e.answer !== answer.correctAns
    );
    if (mcq.length) {
      acquiredMark += answer.mark;
      reportSheet.push({
        questionId: answer.mcqId,
        correctAnswer: answer.correctAns,
        studentAnswer: mcq[0].answer,
      });
      return;
    }
    if (wrongMcq.length) {
      reportSheet.push({
        questionId: answer.mcqId,
        correctAnswer: answer.correctAns,
        studentAnswer: wrongMcq[0].answer,
      });
      return;
    }

    reportSheet.push({
      questionId: answer.mcqId,
      correctAnswer: answer.correctAns,
      studentAnswer: null,
    });
  });
  await examModel.updateOne(
    {
      id,
    },
    {
      acquiredMark,
    }
  );
  return {
    acquiredMark,
    totalMarks: questionPaper.totalMarks,
    reportSheet,
  };
};
