import express from "express";
import auth from "../../middlewares/auth";
import { userRole } from "../../constents";
import validator from "../../util/validator";
import { TQuestionPaperSchema } from "./questionPaper.validation";
import questionPaperController from "./questionPaper.controller";

const router = express.Router();

router.get("/", questionPaperController.getAllQuestionPaper);

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
  "/:qid",
  auth("examinee"),
  questionPaperController.updateQuestionPaper
);
router.patch(
  "/addNewMCQ/:qid",
  auth("examinee"),
  questionPaperController.addMCQIntoQuestionPaper
);
router.delete(
  "/:qid",
  auth("examinee"),
  questionPaperController.deleteQuestionPaper
);

const questionPaperRoutes = router;

export default questionPaperRoutes;
