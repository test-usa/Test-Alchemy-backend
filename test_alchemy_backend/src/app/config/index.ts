import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });
const config = {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV,
  mongoose_uri: process.env.MONGOOSE_URI as string,
  jwt_token_secret: process.env.JWT_TOKEN_SECRET as string,
  jwt_refresh_Token_secret: process.env.JWT_REFRESHTOKEN_SECRET as string,
  token_expairsIn: process.env.TOKEN_EXPAIRS_IN as string,
  rifresh_expairsIn: process.env.REFRESH_TOKEN_EXPAIRS_IN as string,
  cloudinary_name: process.env.CLOUDANAY_NAME as string,
  cloudinary_api_key: process.env.CLOUDNARY_API_KEY as string,
  cloudinary_api_secret: process.env.API_SECRET_CLOUDNARY as string,
  cloudinary_base_folder: process.env.CLOUDNARY_BASE_FOLDER as string,
  admin_firstName: process.env.ADMIN_FIRST_NAME as string,
  admin_lastName: process.env.ADMIN_LAST_NAME as string,
  admin_email: process.env.ADMIN_EMAIL as string,
  admin_id:process.env.ADMIN_ID as string,
  admin_password: process.env.ADMIN_PASSWORD as string,
  bcrypt_salt_round: process.env.SALT_ROUNDS as string,
};
export default config;
