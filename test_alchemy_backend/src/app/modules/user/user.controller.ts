import catchAsync from "../../util/catchAsync";
import userServices from "./user.service";

const createUser = catchAsync(async (req, res) => {
  const result = await userServices.createUser(req.body);
  res.status(200).json({
    message: "User created successfully",
    success: true,
    status: 200,
    body: result,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const result = await userServices.updateUser(req.params.id, req.body);
  res.status(200).json({
    message: "User updated successfully",
    success: true,
    status: 200,
    body: result,
  });
});

const getSingleUser = catchAsync(async (req, res) => {
  const result = await userServices.getSingleUser(req.params.id);
  res.status(200).json({
    message: "User data retrieved successfully",
    success: true,
    status: 200,
    body: result,
  });
});

const getAllUser = catchAsync(async (req, res) => {
  const result = await userServices.getAllUser(
    req.query.firstName as string,
    req.query.lastName as string
  );
  res.status(200).json({
    message: "All users data retrieved successfully",
    success: true,
    status: 200,
    body: result,
  });
});

const deleteUser = catchAsync(async (req, res) => {
  const result = await userServices.deleteUser(req.params.id);
  res.status(200).json({
    message: "User deleted successfully",
    success: true,
    status: 200,
    body: result,
  });
});

const userController = {
  createUser,
  updateUser,
  getSingleUser,
  getAllUser,
  deleteUser,
};
export default userController;
