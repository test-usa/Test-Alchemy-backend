// import multer from "multer"
// import path from "path"
// import { v2 as cloudinary } from 'cloudinary';
// import config from "../config";
// import fs from "fs/promises";



// const deleteFile = async (filePath: string) => {
//     try {
//         await fs.unlink(filePath);
//         console.log(`File  deleted successfully`);
//     } catch (err: any) {
//         console.error(`Error deleting file: ${err.message}`);
//     }
// };

// export const uploadImgToCloudinary = async (name: string, path: string) => {
//     // Configuration
//     cloudinary.config({
//         cloud_name: config.cloudinary_name,
//         api_key: config.cloudinary_api_key,
//         api_secret: config.cloudinary_api_secret // Click 'View API Keys' above to copy your API secret
//     });

  

//     // Upload an image
//     const uploadResult = await cloudinary.uploader
//         .upload(
//             path, {
//             public_id: name,
//         }
//         )
//         .catch((error) => {
//             console.log(error);
//         });


//     await deleteFile(path)
//     return uploadResult
// }

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {

//         cb(null, path.join(process.cwd(), "uploads"))

//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//         cb(null, file.fieldname + '-' + uniqueSuffix)
//     }
// })

// export const upload = multer({ storage: storage })