import express from "express";
const app = express();
import cors from "cors";
import Routes from "./app/routes";
import routeNotFound from "./app/middlewares/routNotFound";
import globalErrorHandler from "./app/middlewares/globalerrorHandeller";



// middleWares
app.use(express.json());
app.use(cors());

// Routs
app.use("/api/v1", Routes);

// route not found
app.use(routeNotFound);

// global error handeller
app.use(globalErrorHandler);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
