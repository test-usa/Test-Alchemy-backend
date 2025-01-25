import { TMCQ } from "./questionPaper.interface";

const preSaveMcqDataModifier = (mcqArray: TMCQ[], QPid: string): TMCQ[] => {
    const modifiedMCQSet = mcqArray.map((mcq, index) => {
        return {
            ...mcq,
            QPid: QPid,
            mcqId: `${QPid}MCQ${index + 1}`,
        };
    });
    console.log(modifiedMCQSet);
    return modifiedMCQSet;
};


const questionPaperUtil = { preSaveMcqDataModifier };
export default questionPaperUtil;
