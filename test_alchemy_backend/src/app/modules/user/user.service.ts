import { ClientSession, startSession } from "mongoose";
import { idFor } from "../../constents";
import idGenerator from "../../util/idGenarator";
import { CandidateModel } from "../candidate/candidate.model";
import { ExamineeModel } from "../examine/examinee.model";
import { TUser, TUserUpdateData } from "./user.interface";
import { UserModel } from "./user.model";

const createUser = async (payload: TUser) => {


  // make id generator for candidate,examinee,admin
  switch (payload.userType) {
    case "candidate":
      const convertCandidateModel = idGenerator.asDocumentModel(CandidateModel)
      payload.id = await idGenerator.collectionIdGenerator(convertCandidateModel, idFor.candidate)
      break;
    case "examinee":
      const convertExamineeModel = idGenerator.asDocumentModel(ExamineeModel)
      payload.id = await idGenerator.collectionIdGenerator(convertExamineeModel, idFor.examinee)
      break;
    case "admin":
      const convertAdminModel = idGenerator.asDocumentModel(UserModel)
      payload.id = await idGenerator.collectionIdGenerator(convertAdminModel, idFor.admin);
      break;
    default:
      return null;
  }



  console.log("payload", payload);

  const isUserExist = await UserModel.findOne({
    email: payload.email,
    isDeleted: false,
  });
  if (isUserExist) {
    throw new Error("User already exist");
  }

  let createExamineeOrCandidate;

  const session: ClientSession = await startSession(); // Start the session
  session.startTransaction(); // Begin transaction


  try {
    const createUser = await UserModel.create([payload], { session });
    if (payload.userType === "candidate") {
      createExamineeOrCandidate = CandidateModel.create([{uid:payload.id}], { session });
    }
    else if (payload.userType === "examinee") {
      createExamineeOrCandidate = ExamineeModel.create([{uid:payload.id}], { session });
    }
    await session.commitTransaction(); // Commit the transaction

    return { createUser, createExamineeOrCandidate };
  } catch (error: any) {
    await session.abortTransaction(); // Rollback the transaction
    console.log("error", error);
    throw new Error(error);
  }
  finally {
    session.endSession();
  }

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
