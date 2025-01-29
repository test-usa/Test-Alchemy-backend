import { TMCQ } from "./questionPaper.interface";
import { QuestionPaperModel } from "./questionPaper.model";


// this function id to update eachg mcq with the question paper id and mcq id
const preSaveMcqDataModifier = (mcqArray: TMCQ[], QPid: string): TMCQ[] => {
    const modifiedMCQSet = mcqArray.map((mcq, index) => {
        return {
            ...mcq,
            QPid: QPid,
            mcqId: `${QPid}MCQ${index + 1}`,
        };
    });

    return modifiedMCQSet;
};


const totalMarksCalculator = async (QPId:string):Promise<number> => {

    const questionPaper = await QuestionPaperModel.findOne({ id: QPId });
    if (!questionPaper) {
        throw new Error("Question Paper not found");
    }
    const totalMarks = questionPaper.MCQSet.reduce((acc, mcq) => {
        return acc + mcq.mark;
    }, 0);

    const updateTotalMarks = await QuestionPaperModel.updateOne({ id: QPId }, { totalMarks: totalMarks });
    if(!updateTotalMarks){
        throw new Error("Total Marks not updated");
    }
    
    return totalMarks;

}



const questionPaperUtil = { preSaveMcqDataModifier,totalMarksCalculator };
export default questionPaperUtil;
