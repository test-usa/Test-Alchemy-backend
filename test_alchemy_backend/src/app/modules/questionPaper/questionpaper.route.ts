import express from "express";
import {
  createQuestionPaper,
  deleteQuestionPaper,
  getAllQuestionPaper,
  getQuestionPapersOfExaminee,
  getSingleQuestionPaper,
  updateQuestionPaper,
} from "./questionPaper.controller";
import auth from "../../middlewares/auth";
import { userRole } from "../../constents";
import validator from "../../util/validator";
import { TQuestionPaperSchema } from "./questionPaper.validation";

const router = express.Router();

router.get("/", getAllQuestionPaper);
router.get(
  "/examinee/:examineeId",
  auth(userRole.examinee),
  getQuestionPapersOfExaminee
);
router.get("/single/:qid", getSingleQuestionPaper);
router.post(
  "/",
  auth("examinee"),
  validator(TQuestionPaperSchema),
  createQuestionPaper
);
router.patch("/:qid", auth("examinee"), updateQuestionPaper);
router.delete("/:qid", auth("examinee"), deleteQuestionPaper);

const questionPaperRoutes = router;

export default questionPaperRoutes;
