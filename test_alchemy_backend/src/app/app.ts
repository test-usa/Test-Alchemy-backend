import express from "express"
const app = express()
import cors from "cors"
import Routes from "./routes"
import globalErrorHandler from "./middlewares/globalerrorHandeller"
import routeNotFound from "./middlewares/routNotFound"

// middleWares
app.use(express.json())
app.use(cors())

// Routs
app.use("api/v1",Routes)

// route not found
app.use(globalErrorHandler)
// global error handeller
app.use(routeNotFound)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

export default app

//Fahim in