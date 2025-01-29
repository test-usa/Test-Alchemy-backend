import express from "express";
import auth from "../../middlewares/auth";
import { userRole } from "../../constents";
import validator from "../../util/validator";
import { TQuestionPaperSchema } from "./questionPaper.validation";
import questionPaperController from "./questionPaper.controller";

const router = express.Router();

router.get(
  "/getAllQuestionPapers",
  auth(userRole.candidate),
  questionPaperController.getAllQuestionPaper
);

router.get(
  "/examinee/:examineeId",
  auth(userRole.examinee),
  questionPaperController.getQuestionPapersOfExaminee
);

router.get("/single/:qid", questionPaperController.getSingleQuestionPaper);

router.post(
  "/createQuestionPaper",
  auth("examinee"),
  validator(TQuestionPaperSchema),
  questionPaperController.createQuestionPaper
);

router.patch(
  "/updateQuestionPaper/:qid",
  auth("examinee"),
  questionPaperController.updateQuestionPaper
);
router.patch(
  "/addNewMCQ",
  auth("examinee"),
  questionPaperController.addMCQIntoQuestionPaper
);
router.patch(
  "/removeMCQ",
  auth("examinee"),
  questionPaperController.removeMCQFromQuestionPaper
);
router.delete(
  "/deleteQuestionPaper",
  auth("examinee"),
  questionPaperController.deleteQuestionPaper
);

const questionPaperRoutes = router;

export default questionPaperRoutes;
