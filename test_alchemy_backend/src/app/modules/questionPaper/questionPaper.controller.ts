import catchAsync from "../../util/catchAsync";
import questionPaperService from "./questionPaper.service";


const getAllQuestionPaper = catchAsync(async (req, res) => {
  const result = await questionPaperService.getAllQuestionPaper();
  res.status(200).json({
    message: "All question papers retrieved successfully",
    success: true,
    status: 200,
    body: result,
  });
});

const getSingleQuestionPaper = catchAsync(async (req, res) => {
  const result = await questionPaperService.getSingleQuestionPaper(req.params.qid);
  res.status(200).json({
    message: "Single question paper retrieved successfully",
    success: true,
    status: 200,
    body: result,
  });
});

const getQuestionPapersOfExaminee = catchAsync(async (req, res) => {
  const result = await questionPaperService.getQuestionPapersOfExaminee(req.params.examineeId);
  res.status(200).json({
    message: "Single question paper retrieved successfully",
    success: true,
    status: 200,
    body: result,
  });
});

const createQuestionPaper = catchAsync(async (req, res) => {
  const user = req.user;
  console.log(user);


  const result = await questionPaperService.createQuestionPaper(user.id,req.body);
  res.status(200).json({
    message: "Question paper created successfully",
    success: true,
    status: 200,
    body: result,
  });
});

const updateQuestionPaper = catchAsync(async (req, res) => {
  const result = await questionPaperService.updateQuestionPaper(req.params.qid, req.body);
  res.status(200).json({
    message: "Question paper updated successfully",
    success: true,
    status: 200,
    body: result,
  });
});

const deleteQuestionPaper = catchAsync(async (req, res) => {
  const result = await questionPaperService.deleteQuestionPaper(req.params.qid);
  res.status(200).json({
    message: "Question paper deleted successfully",
    success: true,
    status: 200,
    body: result,
  });
});

const questionPaperController = {
  getAllQuestionPaper, getSingleQuestionPaper, getQuestionPapersOfExaminee, createQuestionPaper, updateQuestionPaper, deleteQuestionPaper
};
export default questionPaperController;

