import imageUrlBuilder from "@sanity/image-url";
import config from "../../config/sanity";

const builder = imageUrlBuilder(config);

export function imageUrlFor(source) {
  return builder.image(source);
}
