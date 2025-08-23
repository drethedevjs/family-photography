import { ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";

export default defineEventHandler(async event => {
  const config = useRuntimeConfig();

  const s3 = new S3Client({
    endpoint: config.cloudFlareR2Endpoint,
    region: "auto",
    credentials: {
      accessKeyId: config.cloudFlareAccessKey ?? "",
      secretAccessKey: config.cloudFlareSecretKey ?? ""
    }
  });

  const query = getQuery(event);
  console.log("event params", query.prefix);

  const command = new ListObjectsV2Command({
    Bucket: "ctv-photo",
    Prefix: query.prefix
  });

  const response = await s3.send(command);
  return response.Contents ?? [];
});
