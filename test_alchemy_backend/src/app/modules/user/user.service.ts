import { ClientSession, startSession } from "mongoose";
import { idFor } from "../../constents";
import idGenerator from "../../util/idGenarator";
import { CandidateModel } from "../candidate/candidate.model";
import { ExamineeModel } from "../examine/examinee.model";
import { TUser, TUserUpdateData } from "./user.interface";
import { UserModel } from "./user.model";
import { uploadImgToCloudinary } from "../../util/uploadImgToCloudinary";


const createUser = async (payload: TUser, file: any) => {
  // make id generator for candidate,examinee,admin
  const uId = await idGenerator.generateId(payload.userType);
  // upload ing first
  const uploadImg = await uploadImgToCloudinary(payload.id, file.path);
  if (!uploadImg) {
    throw new Error("Image not uploaded");
  }

  payload.id = uId as string;
  payload.img = uploadImg.secure_url;

  console.log("payload", payload);

  const isUserExist = await UserModel.findOne({
    email: payload.email,
    isDeleted: false,
  });
  if (isUserExist) {
    throw new Error("User already exist");
  }

  const session: ClientSession = await startSession(); // Start the session
  session.startTransaction(); // Begin transaction

  try {
    // Create the user in the User model
    const createUser = await UserModel.create([payload], { session });

    // Declare a variable to hold the create promise for Candidate/Examinee
    let createExamineeOrCandidate;

    if (payload.userType === "candidate") {
      // Ensure the correct fields are passed to the Candidate model
      createExamineeOrCandidate = CandidateModel.create([{ uid: payload.id }], { session });
    } else if (payload.userType === "examinee") {
      // Ensure the correct fields are passed to the Examinee model
      createExamineeOrCandidate = ExamineeModel.create([{ uid: payload.id }], { session });
    }

    // Await the result for the candidate/examinee creation
    await createExamineeOrCandidate;

    // Commit the transaction after both User and related models are created
    await session.commitTransaction(); // Commit the transaction



    return { createUser, createExamineeOrCandidate };
  } catch (error: any) {
    await session.abortTransaction(); // Rollback the transaction
    console.log("error", error);
    throw new Error(error);
  } finally {
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
