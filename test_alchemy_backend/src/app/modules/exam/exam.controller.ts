import catchAsync from "../../util/catchAsync";
import { createExam } from "./exam.service";

export const createExamController = catchAsync(async (req, res) => {
    req.body.startTime = parseInt(req.body.startTime, 10)
    req.body.endTime = parseInt(req.body.startTime, 10)
    const result = await createExam(req.body)
    res.send({
        message: "Exam created successfully",
        success: true,
        status: 200,
        body: result,
    })
})

