// server/api/cloudinary.get.ts
import { v2 as cloudinary, ResourceApiOptions } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export default defineEventHandler(async event => {
  const { folderName, includeTag } = getQuery(event) as {
    folderName: string;
    includeTag: boolean;
  };

  try {
    const options: ResourceApiOptions = {
      tags: includeTag
    };
    let result = await cloudinary.api.resources_by_asset_folder(
      folderName,
      options
    );

    return result.resources.map(resource => ({
      metadata: {
        url: resource.secure_url,
        width: resource.width,
        height: resource.height,
        format: resource.format,
        isActive: resource.status === "active",
        galleryName: resource.asset_folder
      },
      tags: resource.tags,
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
