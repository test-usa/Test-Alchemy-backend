import { model, Schema } from "mongoose";
import { TCandidate } from "./candidate.interface";

const candidateSchema = new Schema<TCandidate>({
  uid: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  examSet: {
    type: String,
  },
});

export const CandidateModel = model("Candidate", candidateSchema);
