import express from "express";
import validator from "../../util/validator";
import userController from "./user.controller";
import userValidation from "./user.validation";
import auth from "../../middlewares/auth";
import { userRole } from "../../constents";
import { upload } from "../../util/uploadImgToCloudinary";
// import auth from "../../middlewares/auth";
// import { userRole } from "../../constents";
const userRoutes = express.Router();

// get users
userRoutes.get("/getAllUser", userController.getAllUser);
userRoutes.get("/getSingleUser/:id", userController.getSingleUser);

// crerate user
userRoutes.post(
  "/createExaminee",
  upload.single("file"),
  (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    req.body.userType = "examinee";
    next();
  },
  auth(userRole.admin),
  validator(userValidation.userValidationSchema),
  userController.createUser
);

userRoutes.post(
  "/createCandidate",
  upload.single("file"),
  (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    req.body.userType = "candidate";
    next();
  },
  validator(userValidation.userValidationSchema),
  userController.createUser
);

// update user
userRoutes.patch(
  "/updateUser/:id",
  validator(userValidation.userUpdateValidationSchema),
  userController.updateUser
);
userRoutes.delete("/deleteUser/:id", userController.deleteUser);

export default userRoutes;
