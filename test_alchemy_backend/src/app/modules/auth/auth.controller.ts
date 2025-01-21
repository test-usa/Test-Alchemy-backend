import catchAsync from "../../util/catchAsync";

const logIn = catchAsync(async(req, res) => {
    res.send('Hello auth!')
})