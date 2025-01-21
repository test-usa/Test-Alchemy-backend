import { model, Schema } from "mongoose";
import { ExamType } from "./exam.interface";

export const examSchema = new Schema<ExamType
>({
    name:{
        type: String,
        required: true
    },
    duration:{
        type: String,
        required: true
    },
    isSubmitted:{
        type: String,
        required: true,
    },
    questions:[
        {
            type: Schema.Types.ObjectId,
            ref: "Queations"
        }
    ],
    
})

