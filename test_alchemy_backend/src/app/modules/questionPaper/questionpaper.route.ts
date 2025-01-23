import express from "express";
import {
  createQuestionPaper,
  deleteQuestionPaper,
  getAllQuestionPaper,
  getQuestionPapersOfExaminee,
  getSingleQuestionPaper,
  updateQuestionPaper,
} from "./questionPaper.controller";

const router = express.Router();

router.get("/", getAllQuestionPaper);
router.get("/examinee/:examineeId", getQuestionPapersOfExaminee);
router.get("/single/:qid", getSingleQuestionPaper);
router.post("/", createQuestionPaper);
router.patch("/:qid", updateQuestionPaper);
router.delete("/:qid", deleteQuestionPaper);

const questionPaperRoutes = router;

export default questionPaperRoutes;
