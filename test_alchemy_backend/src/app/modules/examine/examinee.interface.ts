import { Types } from "mongoose";

export type TExaminee = {
  uid: String;
  questionPapers: [Types.ObjectId];
};
