import catchAsync from "../../util/catchAsync";
import authSercvices from "./auth.services";

const logIn = catchAsync(async(req, res) => {
    const {email,password}=req.body
    const result = await authSercvices.logIn(email,password)
   const{approvalToken, refreshToken, findUserWithEmail}= result
    res.status(200).json({
        message:"Log In Successful",
        approvalToken:approvalToken,
        refreshToken:refreshToken,
        user:findUserWithEmail
    })
})

const authController = {
    logIn
}

export default authController