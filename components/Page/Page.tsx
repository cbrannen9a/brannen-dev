import React, { FC } from "react";
import { NextSeo } from "next-seo";
import { SITE_URL, SITE_TITLE } from "@/lib/client";

const Page: FC<PageProps> = ({ name, path, children }) => {
  const title = `${SITE_TITLE} | ${name}`;
  const url = `${SITE_URL}${path}`;

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
        }}
      />
      {children}
    </>
  );
};

type PageProps = {
  name: string;
  path: string;
};

export default Page;
