import type ImageHelper from "@/interfaces/IImageHelper";
import type { _Object } from "@aws-sdk/client-s3";
import { ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";

const imageHelper: ImageHelper = {
  async getImageData(prefix: string) {
    const s3 = new S3Client({
      endpoint: import.meta.env.VITE_CLOUDFLARE_R2_ENDPOINT,
      region: "auto",
      credentials: {
        accessKeyId: import.meta.env.VITE_CLOUDFLARE_ACCESS_KEY ?? "",
        secretAccessKey: import.meta.env.VITE_CLOUDFLARE_SECRET_KEY ?? ""
      }
    });

    const command = new ListObjectsV2Command({
      Bucket: "ctv-photo",
      Prefix: prefix
    });

    try {
      const response = await s3.send(command);
      return response.Contents ?? [];
    } catch (err) {
      console.error(err);
    }
  },
  getImageSrc(imageData: _Object[], tag: string) {
    const key = imageData.length
      ? imageData.find((x) => x.Key?.includes(tag))?.Key
      : "";
    return `${import.meta.env.VITE_CDN_PREFIX}/${key}`;
  }
};

export default imageHelper;
