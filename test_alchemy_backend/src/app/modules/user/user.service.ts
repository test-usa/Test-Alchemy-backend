import { TUser } from "./user.interface";
import { UserMOdel } from "./user.model";
import bcrypt from "bcrypt";

export const createUserIntoDB = async (payload: TUser) => {
  const result = await UserMOdel.create(payload);
  return result;
};
export const getSingleUserFromDB = async (id: string) => {
  const result = await UserMOdel.findOne({ id });
  return result;
};

export const getAllUserFromDB = async (id: string) => {
  const result = await UserMOdel.find();
  return result;
};

export const UpdateUserIntoDB = async (id: string, payload: any) => {
  const result = await UserMOdel.updateOne({ id }, payload);
  return result;
};

export const deleteUserFromDB = async (id: string) => {
  const result = await UserMOdel.updateOne({ id }, { isDeleted: true });
  return result;
};
