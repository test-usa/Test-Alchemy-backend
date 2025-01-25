import { Model, Query } from "mongoose";
import { QuestionPaperModel } from "../modules/questionPaper/questionPaper.model";
import { CandidateModel } from "../modules/candidate/candidate.model";
import { ExamineeModel } from "../modules/examine/examinee.model";
import { UserModel } from "../modules/user/user.model";
import { idFor } from "../constents";

// Utility function to enforce Document compatibility
const asDocumentModel = <T>(model: Model<T>): Model<T & Document> => {
  return model as Model<T & Document>;
};

// Utility function to generate IDs for collections

const collectionIdGenerator = async <T extends Document>(
  model: Model<T>, // Accept a Mongoose model
  idFor: string // The type of ID to generate
): Promise<string> => {
  const prefix = idFor.substring(0, 3).toUpperCase(); // Prefix from idFor

  try {
    // Fetch the last record sorted by `id` in descending order
    const lastRecord = await model
      .findOne() // Create a query
      .sort({ id: -1 }) // Sort by `id` in descending order
      .exec(); // Execute the query

    let newId: string;

    if (lastRecord) {
      // Extract the numeric part of the ID and increment it
      const lastNumber = parseInt(lastRecord.id.substring(3), 10);
      const incrementedNumber = lastNumber + 1;

      // Create the new ID
      newId = `${prefix}${incrementedNumber.toString().padStart(2, "0")}`;
    } else {
      // If no record exists, start with "00"
      newId = `${prefix}00`;
    }

    return newId;
  } catch (error: any) {
    throw new Error(`Error generating ID: ${error.message}`);
  }
};


const generateId = async (role:string):Promise<string> => {
    let uId;
      switch (role) {
        case "candidate":
          const convertCandidateModel = idGenerator.asDocumentModel(CandidateModel);
          uId = await idGenerator.collectionIdGenerator(
            convertCandidateModel,
            idFor.candidate
          );
          break;
        case "examinee":
          const convertExamineeModel = idGenerator.asDocumentModel(ExamineeModel);
          uId = await idGenerator.collectionIdGenerator(
            convertExamineeModel,
            idFor.examinee
          );
          break;
        case "admin":
          const convertAdminModel = idGenerator.asDocumentModel(UserModel);
          uId = await idGenerator.collectionIdGenerator(
            convertAdminModel,
            idFor.admin
          );
          break;
       
      }
        return uId as string;
}


const mcqIdGenerator = async (QPId: string): Promise<string> => {
  const questionPaper = await QuestionPaperModel.findOne({ id: QPId });
  const mcqSetLength = questionPaper?.MCQSet.length;
  return `${QPId}MCQ${mcqSetLength}`;
};

const idGenerator = {
  collectionIdGenerator,
  mcqIdGenerator,
  asDocumentModel,
  generateId
};

export default idGenerator;
