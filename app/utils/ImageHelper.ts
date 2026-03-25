import type HfImageData from "~/interfaces/IHfImageData";

const imageHelper = {
  async getCloudinaryImageData(
    folderName: string | null = null,
    tag: string | null = null
  ) {
    return await useFetch<HfImageData[]>("/api/cloudinaryImage", {
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
  async getImageAndTagData(folderName: string | null = null) {
    return await useFetch<HfImageData[]>("/api/imageAndTag", {
      query: { folderName, includeTag: true },
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
    return await useFetch<HfImageData[]>("/api/cloudinaryImage", {
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
    const fileName = imageData?.length
      ? imageData.find((x: any) => x.fileName?.includes(tag))?.fileName
      : "";

    return fileName ?? "";
  }
};

export default imageHelper;
