import { z } from "zod";

export const createExamValidationSchema = z.object({
    body: z.object({
        name: z.string().min(1),
        startTime: z.string().min(1),
        endTime: z.string().min(1),
        questionPaperId: z.string().min(1)
    })
})