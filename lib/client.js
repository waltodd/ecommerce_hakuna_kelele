const sanityClient = require("@sanity/client");
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "3beq8p4t",
  dataset: "production",
  apiVersion: "2022-05-24",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
