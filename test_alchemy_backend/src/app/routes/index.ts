import express from "express";
import authRouter from "../modules/auth/auth.routes";
import candidateRouter from "../modules/candidate/candidate.routes";
import examineRoutes from "../modules/examine/examine.routes";
import userRoutes from "../modules/user/user.route";

const Routes = express.Router();
console.log("working");
// Array of module routes
const moduleRouts = [
  {
    path: "/auth",
    router: authRouter,
  },
  {
    path: "/user",
    router: userRoutes,
  },
  {
    path: "/examine",
    router: examineRoutes,
  },
  {
    path: "/candidate",
    router: candidateRouter,
  },
];

// Register each route in moduleRouts
moduleRouts.forEach(({ path, router }) => {
  Routes.use(path, router);
});

// Export the router
export default Routes;
