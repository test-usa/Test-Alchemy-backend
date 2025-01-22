import { TUser } from "./user.interface";
import { UserModel } from "./user.model";

export const createUserIntoDB = async (payload: TUser) => {
  const isUserExist = await UserModel.findOne({
    id: payload.id,
    email: payload.email,
    isDeleted: false,
  });

  if (isUserExist) {
    throw new Error("User already exist");
  }

  const result = await UserModel.create(payload);
  return result;
};
export const getSingleUserFromDB = async (id: string) => {
  const isUserExist = await UserModel.findOne({
    id,
    isDeleted: false,
  });
  if (!isUserExist) {
    throw new Error("User dose not exist");
  }
  const result = isUserExist;
  return result;
};

export const getAllUserFromDB = async () => {
  const result = await UserModel.find({ isDeleted: false });
  return result;
};

export const updateUserIntoDB = async (id: string, payload: any) => {
  const isUserExist = await UserModel.findOne({
    id,
    isDeleted: false,
  });

  if (!isUserExist) {
    throw new Error("User dose not exist");
  }

  const result = await UserModel.updateOne({ id, isDeleted: false }, payload);
  return result;
};

export const deleteUserFromDB = async (id: string) => {
  const result = await UserModel.updateOne({ id }, { isDeleted: true });
  return result;
};
