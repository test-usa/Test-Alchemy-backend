import dotenv from "dotenv"
import path from "path"
dotenv.config({path:path.join(process.cwd(),".env")})
const config={
    port:process.env.PORT,
    nodeEnv:process.env.NODE_ENV,
    mongoose_uri:process.env.MONGOOSE_URI as string,
    jwt_token_secret:process.env.JWT_TOKEN_SECRET,
    jwt_refresh_Token_secret:process.env.JWT_REFRESHTOKEN_SECRET,
    token_expairsIn:process.env.TOKEN_EXPAIRS_IN,
    rifresh_expairsIn:process.env.REFRESH_TOKEN_EXPAIRS_IN
}
export default config