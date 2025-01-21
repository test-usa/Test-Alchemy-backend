import express from "express";

const authRouter = express.Router();

<<<<<<< HEAD
authRouter.get("/logIn", (req, res) => {
  console.log("habib");
});
=======
authRouter.post("/logIn",(req,res)=>{
    console.log("habib")
})
>>>>>>> 41fcb42dc7348ba7e7c2042859cb3e8fa125a86d

export default authRouter;
