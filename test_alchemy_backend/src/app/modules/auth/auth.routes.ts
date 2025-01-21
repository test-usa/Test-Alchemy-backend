import express from "express";

const authRouter = express.Router();

authRouter.get("/logIn", (req, res) => {
  console.log("habib");
});

export default authRouter;
