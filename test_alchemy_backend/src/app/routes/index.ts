import express from "express";
import authRouter from "../modules/auth/auth.routes";
import candidateRouter from "../modules/candidate/candidate.routes";
import examineRoutes from "../modules/examine/examine.routes";

const Routes = express.Router();

// Array of module routes
const moduleRouts = [
    {
        path: "/auth",
        router: authRouter, 
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
    // console.log("path:",path,router)
    Routes.use(path, router);
});

// Export the router
export default Routes;