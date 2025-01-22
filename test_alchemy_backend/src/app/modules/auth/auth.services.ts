
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import createToken from "./auth.utill"
import config from "../../config"
import { UserModel } from "../user/user.model"

const logIn = async (email: string, password: string) => {
    const findUserWithEmail = await UserModel.findOne({ email: email })
    if (!findUserWithEmail) {
        throw Error("no user found with this email")
    }
    const match = await bcrypt.compare(password, findUserWithEmail.password);
    if (!match) {
        throw Error("password is not matched")
    }

    const findUserAndUpdate = await UserModel.findOneAndUpdate({ email: email })
    if (!findUserWithEmail) {
        throw Error("no; user found with this email")
    }

    // Tokenize user data
    const tokenizeData = { id: findUserWithEmail.id, role: findUserWithEmail.userType };
    const approvalToken = createToken(tokenizeData, config.jwt_token_secret as string, config.token_expairsIn as string);
    const refreshToken = createToken(tokenizeData, config.jwt_refresh_Token_secret as string, config.rifresh_expairsIn as string);
    
    // console.log(approvalToken, refreshToken, findUserWithEmail)

    return { approvalToken, refreshToken, findUserWithEmail };


}

const authSercvices = {
    logIn
}
export default authSercvices