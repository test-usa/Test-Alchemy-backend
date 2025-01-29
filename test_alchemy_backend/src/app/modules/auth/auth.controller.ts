import catchAsync from "../../util/catchAsync";
import golbalRespnseHandler from "../../util/globalResponseHandeler";
import authSercvices from "./auth.services";

const logIn = catchAsync(async (req, res) => {
    const { email, password } = req.body
    const result = await authSercvices.logIn(email, password)
    const { approvalToken, refreshToken } = result
    golbalRespnseHandler(res, {
        statusCode: 200,
    success: true,
    message: "Login Successful",
    data: {
        approvalToken,
        refreshToken,
    }
    })
})

const logOut = catchAsync(async (req, res) => {
    const authorizationToken = req?.headers?.authorization
    console.log(authorizationToken)


    if (!authorizationToken) {
        throw Error("token is missing")
    }
    
    const result = await authSercvices.logOut(authorizationToken)
    res.status(200).json({
        message: "Log OUT Successful",
    })
})

const authController = {
    logIn, logOut
}
export default authController