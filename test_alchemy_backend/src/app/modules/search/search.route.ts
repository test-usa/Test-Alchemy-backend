import express from "express";
import { searchController } from "./search.controller";
import auth from "../../middlewares/auth";
import { userRole } from "../../constents";

const router = express.Router();

router.get("/searchForCandidate", auth(userRole.candidate), searchController);
router.get("/searchForExaminee", auth(userRole.examinee), searchController);
router.get("/searchForAdmin", auth(userRole.admin), searchController);

const searchRoute = router;

export default searchRoute;
