import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const candidateSchema = new Schema<TUser>(
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

export const candidateModel = model<TUser>("Candidate", candidateSchema);
