export interface ExamType {
    name: string,
    isSubmitted: boolean,
    totalMarks: number,
    acquiredMark: number,
    startTime: Date,
    endTime: Date,
    isDeleted: boolean,
    questionPaperId: string,
    answerSheet: {
        qId: string,
        answer: number
    }[]
}