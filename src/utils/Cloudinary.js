import { v2 as cloudinary } from "cloudinary";
import { response } from "express";
import fs from "fs";
// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload file
  const response = await cloudinary.uploader.upload(localFilePath, {
        resource_type:"auto"
    });
    //File Has Been uploaded SuccesFully
    // console.log("File is uploed Successfully")
    fs.unlinkSync(localFilePath)
    return response
  } catch (error) {
    fs.unlink(localFilePath)

    return null
  }
};
export {uploadOnCloudinary}

