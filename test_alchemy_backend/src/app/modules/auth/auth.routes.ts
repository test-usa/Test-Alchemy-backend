import express from "express"
import authController from "./auth.controller"
import validator from "../../util/validator"
import { logInValidator } from "./auth.validatot"
import auth from "../../middlewares/auth";
import { userRole } from "../../constents";

const authRouter = express.Router();

authRouter.post("/logIn",validator(logInValidator),authController.logIn)
authRouter.get("/logOut",auth(userRole.examinee, userRole.candidate) ,authController.logOut)

export default authRouter;
