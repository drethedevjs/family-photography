export default interface HfImageData {
  metadata: Metadata;
  fileName: string;
}

interface Metadata {
  url: string;
  width: string;
  height: string;
  format: string;
  isActive: boolean;
  galleryName: string;
}
