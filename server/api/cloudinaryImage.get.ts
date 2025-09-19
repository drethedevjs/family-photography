// server/api/cloudinary.get.ts
import CloudinarySearchResult from "@/interfaces/ICloudinarySearchResult";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export default defineEventHandler(async event => {
  const { folderName, tag } = getQuery(event) as {
    folderName: string;
    tag: string;
  };

  try {
    let result: CloudinarySearchResult;
    if (tag) {
      console.info(`(Cloundinary) - Getting images with tag: ${tag}`);
      result = await cloudinary.search
        .expression(tag)
        .fields("tags")
        .max_results(30)
        .execute();
    } else {
      console.info(`(Cloundinary) - Getting images from folder: ${folderName}`);
      result = await cloudinary.search
        .expression(`folder:${folderName}/*`)
        .sort_by("filename", "asc")
        .max_results(30)
        .execute();
    }

    return result.resources.map(resource => ({
      metadata: {
        url: resource.secure_url,
        width: resource.width,
        height: resource.height,
        format: resource.format,
        isActive: resource.status === "active",
        galleryName: resource.asset_folder
      },
      fileName: resource.display_name ?? resource.filename ?? resource.public_id
    }));
  } catch (oops: any) {
    const err = oops.error?.message ?? oops;
    console.error("Check this error: ", err);
    throw createError({
      statusCode: oops.error.http_code,
      statusMessage: `Failed to fetch images: ${err}`
    });
  }
});
