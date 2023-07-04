import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
dotenv.config();
cloudinary.config({
  cloud_name: "dsbiugddk",
  api_key: "397545573884224",
  api_secret: "2BPHK1CLP_Yc8mQMV4ylPyJFzkI",
});

export default cloudinary;
