import Head from "next/head";
import {
  Content,
  Layout,
  MoreStories,
  Hero,
  Cards,
  Banner,
  Social,
} from "@/components";

import { indexQuery } from "@/lib/common";
import { getClient } from "@/lib/server";

export default function Index({
  allPosts,
  allProjects,
  siteSettings,
  homePage,
  preview,
}) {
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
              case "social":
                return <Social key={item._key} social={item.social} />;
              default:
                return null;
            }
          })}
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
          {allProjects.length > 0 && <MoreStories posts={allProjects} />}
        </Content>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const { allPosts, allProjects, siteSettings, homePage } = await getClient(
    preview
  ).fetch(indexQuery);
  return {
    props: { allPosts, allProjects, siteSettings, homePage, preview },
  };
}
