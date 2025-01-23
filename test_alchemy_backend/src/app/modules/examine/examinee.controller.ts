import catchAsync from "../../util/catchAsync";
import {
  addQuestionPaperInExamineeDocument,
  deleteQuestionPaperInExamineeDocument,
  updateQuestionPaperInExamineeDocument,
} from "./examinee.service";

export const addQuestionPaper = catchAsync(async (req, res) => {
  const result = addQuestionPaperInExamineeDocument();
  res.status(200).json({
    message: "Exam successfully",
    status: 200,
    data: result,
  });
});

export const updateQuestionPaper = catchAsync(async (req, res) => {
  const result = updateQuestionPaperInExamineeDocument();
  res.status(200).json({
    message: "Exam updated successfully",
    status: 200,
    data: result,
  });
});

export const deleteQuestionPaper = catchAsync(async (req, res) => {
  const result = deleteQuestionPaperInExamineeDocument();
  res.status(200).json({
    message: "Exam deleted successfully",
    status: 200,
    data: result,
  });
});
