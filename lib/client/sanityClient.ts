import sanityClient from "@sanity/client";
import { sanityConfig } from "lib/common/sanity";
import {
  createImageUrlBuilder,
  createPreviewSubscriptionHook,
} from "next-sanity";

export default sanityClient(sanityConfig);

export const imageBuilder = createImageUrlBuilder(sanityConfig);

export const urlForImage = (source) =>
  imageBuilder.image(source).auto("format").fit("max");

export const usePreviewSubscription = createPreviewSubscriptionHook(
  sanityConfig
);
