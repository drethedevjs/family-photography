import type { _Object } from "@aws-sdk/client-s3";

/**
 * Helper utility for handling image-related operations with S3/R2 storage
 * @namespace imageHelper
 * @version 1.0.0
 * @author Unknown
 */
export default interface ImageHelper {
  /**
   * Retrieves image data from Cloudflare R2 storage
   * @async
   * @param {string} prefix - The prefix to filter objects in the bucket
   * @returns {Promise<_Object[]>} Array of S3 objects matching the prefix
   * @throws {Error} When S3 client fails to retrieve objects
   * @example
   * const images = await imageHelper.getImageData('photos/2023');
   */
  getImageData(prefix: string): Promise<_Object[] | undefined>;

  /**
   * Generates a CDN URL for an image based on the image data and tag
   * @param {_Object[]} imageData - Array of S3 objects
   * @param {string} tag - Tag to search for in the image key
   * @returns {string} Complete CDN URL for the image
   * @example
   * const imageUrl = imageHelper.getImageSrc(imageData, 'thumbnail');
   */
  getImageSrc(imageData: _Object[], tag: string): string;
}
