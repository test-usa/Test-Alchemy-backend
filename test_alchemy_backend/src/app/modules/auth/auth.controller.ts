import catchAsync from "../../util/catchAsync";
import authSercvices from "./auth.services";

const logIn = catchAsync(async(req, res) => {
    const {email,password}=req.body
    const result = await authSercvices.logIn(email,password)
    res.status(200).json({
        message:"success"
    })
})

const authController = {
    logIn
}

export default authController