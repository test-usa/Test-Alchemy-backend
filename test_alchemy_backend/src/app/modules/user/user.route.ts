import express from "express";
import validator from "../../util/validator";
import userController from "./user.controller";
import userValidation from "./user.validation";
// import auth from "../../middlewares/auth";
// import { userRole } from "../../constents";
const userRoutes = express.Router();

userRoutes.get("/getAllUser", userController.getAllUser);
userRoutes.get("/getSingleUser/:id", userController.getSingleUser);
userRoutes.post("/createExaminee", validator(userValidation.userValidationSchema), userController.createUser);
userRoutes.post("/createCandidate",validator(userValidation.userValidationSchema),userController.createUser);
userRoutes.patch("/updateUser/:id",validator(userValidation.userUpdateValidationSchema),userController.updateUser);
userRoutes.delete("/deleteUser/:id", userController.deleteUser);

export default userRoutes;
