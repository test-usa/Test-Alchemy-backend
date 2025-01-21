import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from "bcrypt";

const userSchema = new Schema<TUser>(
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
      required: true,
    },
    isDeleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const hashedPass = await bcrypt.hash(this.password as string, 6);
  this.password = hashedPass;
  next();
});

export const UserMOdel = model<TUser>("User", userSchema);
