import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "./user.controller";

const router = express.Router();

router.get("/", getAllUser);
router.get("/:id", getSingleUser);
router.post("/", createUser);
router.patch("/", updateUser);
router.delete("/:id", deleteUser);

const userRoutes = router;

export default userRoutes;
