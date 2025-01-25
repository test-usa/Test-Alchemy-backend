import { idFor } from "../../constents";
import idGenerator from "../../util/idGenarator";
import { QuestionPaperModel } from "../questionPaper/questionPaper.model";
import { examModel } from "./exam.model";

export const startExam = async (payload: object) => {
    const modifyModel = idGenerator.asDocumentModel(examModel)
    const generatedId = await idGenerator.collectionIdGenerator(modifyModel, idFor.exam)
    return examModel.create({
        id: generatedId,
        ...payload
    })
}

export const endExam = async (id: string, payload: object) => {
    const exam = await examModel.findOne({
        id,
    })
    if (!exam) {
        throw new Error("Exam not found")
    }
    const questionPaper = await QuestionPaperModel.findOne({
        id: exam.questionPaperId
    })
    if (!questionPaper) {
        throw new Error("Question paper not found")
    }
    const { answerSheet } = exam
    let acquiredMark = 0
    questionPaper.MCQSet.forEach(question => {
        console.log(question);
        
        const mcqId = question.mcqId
        answerSheet.forEach(answer => {
            if (answer.mcqId === mcqId && answer.answer === question.correctAns) {
                acquiredMark += question.mark
            }
        })
    })

    console.log( "number",acquiredMark);
    

}
