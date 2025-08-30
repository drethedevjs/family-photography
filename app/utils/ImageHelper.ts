import type { _Object } from "@aws-sdk/client-s3";

const imageHelper = {
  async getImageData(prefix: string) {
    return await useFetch("/api/image", {
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
  getImageSrc(imageData: _Object[], tag: string) {
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
