import { Types } from "mongoose";

export type TCandidate = {
  uid: string;
  examSet: [Types.ObjectId];
};
