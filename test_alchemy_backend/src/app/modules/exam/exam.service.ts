import { examModel } from "./exam.model";
import {
    endExam as endExamSChema
} from './exam.validation

export const startExam = async (payload: object) => {
    return examModel.create(payload)
}

export const endExam = async (payload: object, id:string) => {
    const {body:{
        answerSheet
    }} = endExamSChema.parse(payload)
    return examModel.updateOne({
        id
    },payload)
}
