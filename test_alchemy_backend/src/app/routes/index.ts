import express from "express";

const Routs = express.Router();

// Array of module routes
// const moduleRouts = [
//     {
//         path: "auth",
//         router: authRouter, 
//     },
// ];

// Register each route in moduleRouts
// moduleRouts.forEach(({ path, router }) => {
//     Routs.use(`/${path}`, router);
// });

// Export the router
export default Routs;