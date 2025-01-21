import { model, Schema } from "mongoose";
import { TCandidate } from "./candidate.interface";

const candidateSchema = new Schema<TCandidate>(
  {
    id: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    domain: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    userType: {
      type: String,
      enum: ["candidate", "examinee"],
    },
  },
  {
    timestamps: true,
  }
);

export const candidateModel = model<TCandidate>("Candidate", candidateSchema);
