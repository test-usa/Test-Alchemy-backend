import { UserMOdel } from "../user/user.model"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const logIn = async (email: string, password: string) => {
    const findUserWithEmail = await UserMOdel.findOne({ email: email })
    if (!findUserWithEmail) {
        throw Error("no; user found with this email")
    }
    const match = await bcrypt.compare(password, findUserWithEmail.password);
    if(!match)
    {
        throw   Error("password is not matched")
    }

    jwt.sign({
        data: 'foobar'
      }, 'secret', { expiresIn: '1h' });
}

const authSercvices = {
    logIn
}
export default authSercvices