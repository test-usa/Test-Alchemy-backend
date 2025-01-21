import express from "express"
import authController from "./auth.controller"
import validator from "../../util/validator"
import { logInValidator } from "./auth.validatot"

const authRouter = express.Router()

authRouter.post("/logIn",validator(logInValidator),authController.logIn)

export default authRouter