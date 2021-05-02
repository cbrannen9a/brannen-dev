import { CTA, SanityBlockContent } from "@/types";
import React, { FC } from "react";
import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";
import Ctas from "../Common";

const Hero: FC<Props> = ({ heading, subHeading, tagline, ctas, image }) => (
  <section>
    <div className="max-w-7xl mx-auto relative bg-white overflow-hidden p-1 sm:p-4">
      <>
        <div className="relative z-10 px-8 pt-8 bg-white lg:max-w-2xl lg:w-full ">
          <div className="text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">{heading}</span>
              <span className="block text-blue-600 xl:inline">
                {subHeading}
              </span>
            </h1>
            <div className="mb-2 mt-3 text-base text-gray-500 md:text-xl lg:mx-0">
              <BlockContent blocks={tagline} />
            </div>

            {ctas && (
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <Ctas ctas={ctas} />
              </div>
            )}
          </div>
        </div>
      </>
      {image && (
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 p-4 overflow-hidden">
          <Image
            className="h-48 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src={image.asset.url}
            alt={image.alt}
            layout="responsive"
            width={350}
            height={250}
          />
        </div>
      )}
    </div>
  </section>
);

interface Props {
  heading: string;
  subHeading: string;
  tagline: SanityBlockContent;
  ctas?: CTA[];
  image?: {
    alt: string;
    asset: {
      url: string;
      creditLine: string;
      description: string;
    };
  };
}

export default Hero;
