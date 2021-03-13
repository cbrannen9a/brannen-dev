import Head from "next/head";
import {
  Content,
  Layout,
  MoreStories,
  Hero,
  Cards,
  Banner,
} from "@/components";

import { indexQuery } from "@/lib/common";
import { getClient } from "@/lib/server";

export default function Index({ allPosts, siteSettings, homePage, preview }) {
  const { content } = homePage;
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{siteSettings.title}</title>
        </Head>
        <Content>
          {content.map((item) => {
            switch (item._type) {
              case "hero":
                return (
                  <Hero
                    key={item._key}
                    heading={item.heading}
                    subHeading={item.subHeading}
                    tagline={item.tagline}
                    ctas={item.ctas}
                    image={item.image}
                  />
                );
              case "cards":
                return <Cards key={item._key} cards={item.cards} />;
              case "banner":
                return (
                  <Banner
                    key={item._key}
                    heading={item.heading}
                    subHeading={item.subHeading}
                    ctas={item.ctas}
                  />
                );
              default:
                return null;
            }
          })}
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
        </Content>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const { allPosts, siteSettings, homePage } = await getClient(preview).fetch(
    indexQuery
  );
  return {
    props: { allPosts, siteSettings, homePage, preview },
  };
}
