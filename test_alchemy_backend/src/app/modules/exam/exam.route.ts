import express from "express";
import validator from "../../util/validator";
import { createExamValidationSchema } from "./exam.validation";
import { createExamController } from "./exam.controller";
import auth from "../../middlewares/auth";
import { userRole } from "../../constents";


const router = express.Router();

router.post("/create", auth(userRole.candidate) ,validator(createExamValidationSchema), createExamController)

const examRoute = router

export default examRoute
