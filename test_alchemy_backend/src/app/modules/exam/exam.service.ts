import { examModel } from "./exam.model";

export const createExam = async (payload: object) => {
    return examModel.create(payload)
}

export const updateExam = async (payload: object, id:string) => {
    return examModel.updateOne({
        id
    },payload)
}