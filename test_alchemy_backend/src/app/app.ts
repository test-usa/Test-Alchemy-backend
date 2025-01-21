<<<<<<< HEAD
import express from "express";
const app = express();
import cors from "cors";
import Routes from "./routes";
import globalErrorHandler from "./middlewares/globalerrorHandeller";
import routeNotFound from "./middlewares/routNotFound";
=======
import express from "express"
const app = express()
import cors from "cors"

import globalErrorHandler from "./middlewares/globalerrorHandeller"
import routeNotFound from "./middlewares/routNotFound"
import Routes from "./routes"
>>>>>>> 41fcb42dc7348ba7e7c2042859cb3e8fa125a86d

// middleWares
app.use(express.json());
app.use(cors());

// Routs
<<<<<<< HEAD
app.use("/api/v1", Routes);

// route not found
app.use(globalErrorHandler);
// global error handeller
app.use(routeNotFound);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
=======
app.use("/api/v1",Routes)

// route not found
app.use(routeNotFound)

// global error handeller
app.use(globalErrorHandler)


app.get('/', (req, res) => {
    res.send('Hello World!')
})
>>>>>>> 41fcb42dc7348ba7e7c2042859cb3e8fa125a86d

export default app;
