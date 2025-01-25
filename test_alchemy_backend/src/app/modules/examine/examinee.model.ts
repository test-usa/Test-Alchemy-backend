import { model, Schema } from "mongoose";
import { TExaminee } from "./examinee.interface";
import { string } from "zod";

const examineeSchema = new Schema<TExaminee>({
  uid: {
    type: String,
  },
  questionPapers: {
    type: [Schema.Types.ObjectId],
    ref: "QuestionPaper",
    required: true,
  },
});

export const ExamineeModel = model("Examinee", examineeSchema);
