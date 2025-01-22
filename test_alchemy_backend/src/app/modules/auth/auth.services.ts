import { UserMOdel } from "../user/user.model"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import createToken from "./auth.utill"
import config from "../../config"

const logIn = async (email: string, password: string) => {
    const findUserWithEmail = await UserMOdel.findOne({ email: email })
    if (!findUserWithEmail) {
        throw Error("no; user found with this email")
    }
    const match = await bcrypt.compare(password, findUserWithEmail.password);
    if (!match) {
        throw Error("password is not matched")
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