import { idFor } from "../../constents";
import idGenerator from "../../util/idGenarator";
import { TUser, TUserUpdateData } from "./user.interface";
import { UserModel } from "./user.model";

const createUser = async (payload: TUser) => {
  // const gid = await idGenerator.collectionIdGenerator(UserModel,idFor.candidate)

  console.log("payload", payload);

  const isUserExist = await UserModel.findOne({
    email: payload.email,
    isDeleted: false,
  });
  if (isUserExist) {
    throw new Error("User already exist");
  }
  const result = await UserModel.create({ ...payload, id: "123" });
  return result;
};

const getSingleUser = async (id: string) => {
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

const getAllUser = async () => {
  const result = await UserModel.find({ isDeleted: false });
  return result;
};

const updateUser = async (id: string, payload: TUserUpdateData) => {
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

const deleteUser = async (id: string) => {
  const result = await UserModel.updateOne({ id }, { isDeleted: true });
  return result;
};

const userServices = {
  createUser,
  updateUser,
  getSingleUser,
  getAllUser,
  deleteUser,
};
export default userServices;
