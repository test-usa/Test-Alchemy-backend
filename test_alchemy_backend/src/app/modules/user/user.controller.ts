import { Request, Response } from "express";
import catchAsync from "../../util/catchAsync";
import {
  createUserIntoDB,
  deleteUserFromDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  updateUserIntoDB,
} from "./user.service";

export const createUser = catchAsync(async (req, res) => {
  const result = await createUserIntoDB(req.body);
  res.status(200).json({
    message: "User created successfully",
    success: true,
    status: 200,
    body: result,
  });
});

export const updateUser = catchAsync(async (req, res) => {
  const result = await updateUserIntoDB(req.params.id, req.body);
  res.status(200).json({
    message: "User updated successfully",
    success: true,
    status: 200,
    body: result,
  });
});

export const getSingleUser = catchAsync(async (req, res) => {
  const result = await getSingleUserFromDB(req.params.id);
  res.status(200).json({
    message: "User data retrieved successfully",
    success: true,
    status: 200,
    body: result,
  });
});

export const getAllUser = catchAsync(async (req, res) => {
  const result = await getAllUserFromDB();
  res.status(200).json({
    message: "All users data retrieved successfully",
    success: true,
    status: 200,
    body: result,
  });
});

export const deleteUser = catchAsync(async (req, res) => {
  const result = await deleteUserFromDB(req.params.id);
  res.status(200).json({
    message: "User deleted successfully",
    success: true,
    status: 200,
    body: result,
  });
});
