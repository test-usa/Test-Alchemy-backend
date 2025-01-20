import dotenv from "dotenv"
import path from "path"
dotenv.config({path:path.join(process.cwd(),".env")})
const config={
    port:process.env.PORT,
    nodeEnv:process.env.NODE_ENV,
    mongoose_uri:process.env.MONGOOSE_URI as string
}
export default config