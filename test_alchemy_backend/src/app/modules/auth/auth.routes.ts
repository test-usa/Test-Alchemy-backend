import express from "express"

const authRouter = express.Router()

authRouter.post("/logIn",(req,res)=>{
    console.log("habib")
})

export default authRouter