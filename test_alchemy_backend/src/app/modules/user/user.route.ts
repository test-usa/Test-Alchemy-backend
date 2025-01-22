import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "./user.controller";
import validator from "../../util/validator";
import {
  userUpdateValidationSchema,
  userValidationSchema,
} from "./user.validation";
import auth from "../../middlewares/auth";
import { userRole } from "../../constents";

const router = express.Router();

router.get("/", getAllUser);
router.get("/:id", getSingleUser);
router.post("/", validator(userValidationSchema), createUser);
router.patch("/:id", validator(userUpdateValidationSchema), updateUser);
router.delete("/:id", deleteUser);

const userRoutes = router;

export default userRoutes;
