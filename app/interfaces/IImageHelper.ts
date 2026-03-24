import type HfImageData from "~/interfaces/IHfImageData";

/**
 * Helper utility contract for handling Cloudinary image operations.
 * @namespace ImageHelper
 * @version 2.0.0
 *
 * @description
 * This interface was updated from the old S3/R2-based shape to match the
 * current Cloudinary-based helper methods now used in the app.
 */
export default interface ImageHelper {
  /**
   * Retrieves Cloudinary image data, optionally filtered by folder name and/or tag.
   *
   * @async
   * @param {string | null} [folderName=null] - Optional Cloudinary folder name to filter images.
   * @param {string | null} [tag=null] - Optional tag to further filter images.
   * @returns {Promise<any>}
   * A Promise containing the result of the Nuxt `useFetch` call for Cloudinary images.
   *
   * @example
   * const images = await imageHelper.getCloudinaryImageData("gallery", "featured");
   */
  getCloudinaryImageData(
    folderName?: string | null,
    tag?: string | null
  ): Promise<any>;

  /**
   * Retrieves Cloudinary image data filtered by tag only.
   *
   * @async
   * @param {string} tag - The Cloudinary tag used to filter images.
   * @returns {Promise<any>}
   * A Promise containing the result of the Nuxt `useFetch` call for tagged images.
   *
   * @example
   * const headshots = await imageHelper.getCloudinaryImageDataByTag("headshot");
   */
  getCloudinaryImageDataByTag(tag: string): Promise<any>;

  /**
   * Finds and returns the image source string for the first image whose file name includes the given tag.
   *
   * @param {HfImageData[] | null | undefined} imageData - Array of Cloudinary image data objects.
   * @param {string} tag - Text to search for within each image file name.
   * @returns {string} The matching image file name or an empty string if no match is found.
   *
   * @example
   * const imageSrc = imageHelper.getCloudinaryImageSrc(imageData, "thumbnail");
   */
  getCloudinaryImageSrc(
    imageData: HfImageData[] | null | undefined,
    tag: string
  ): string;
}
