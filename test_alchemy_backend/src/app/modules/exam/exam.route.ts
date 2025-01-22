import express from "express";
import validator from "../../util/validator";
import { createExamValidationSchema } from "./exam.validation";
import { createExamController } from "./exam.controller";


const router = express.Router();

router.post("/create", validator(createExamValidationSchema), createExamController)

const examRoute = router

export default examRoute
