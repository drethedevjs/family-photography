import type { _Object } from "@aws-sdk/client-s3";
import type CtvImageData from "~/interfaces/ICtvImageData";

const imageHelper = {
  async getImageData(prefix: string) {
    return await useFetch<_Object[]>("/api/image", {
      query: { prefix },
      method: "GET",
      onResponse({ request, response, options }) {
        return response._data;
      },
      onResponseError({ request, response, options }) {
        console.error("Error getting image(s): ", response._data);
      }
    });
  },
  async getCloudinaryImageData(
    folderName: string | null = null,
    tag: string | null = null
  ) {
    return await useFetch<CtvImageData[]>("/api/cloudinaryImage", {
      query: { folderName, tag },
      method: "GET",
      onResponse({ request, response, options }) {
        return response._data;
      },
      onResponseError({ request, response, options }) {
        console.error("Error getting image(s): ", response._data);
      }
    });
  },
  async getCloudinaryImageDataByTag(tag: string) {
    return await useFetch<CtvImageData[]>("/api/cloudinaryImage", {
      query: { tag },
      method: "GET",
      onResponse({ request, response, options }) {
        return response._data;
      },
      onResponseError({ request, response, options }) {
        console.error("Error getting image(s): ", response._data);
      }
    });
  },
  getCloudinaryImageSrc(imageData: any, tag: string) {
    const fileName = imageData.length
      ? imageData.find((x: any) => x.fileName?.includes(tag)).fileName
      : "";

    return fileName;
  },
  getImageSrc(imageData: _Object[], tag: string) {
    const config = useRuntimeConfig();
    const key = imageData.length
      ? imageData.find(x => x.Key?.includes(tag))?.Key
      : "";

    return key;
  },
  getLogoSrc(imageData: _Object[], tag: string) {
    const config = useRuntimeConfig();
    const key = imageData.length
      ? imageData.find(x => x.Key?.includes(tag))?.Key
      : "";

    return `${config.public.cdnPrefix}/${key}`;
  },
  createSrcLink(imageData: _Object) {
    const config = useRuntimeConfig();
    return `${config.public.cdnPrefix}/${imageData.Key}`;
  }
};

export default imageHelper;
