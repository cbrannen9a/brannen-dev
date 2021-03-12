import Head from "next/head";
import { Content, Layout, MoreStories, HeroPost } from "@/components";

import { indexQuery } from "@/lib/common";
import { getClient, overlayDrafts } from "@/lib/server";

export default function Index({ allPosts, siteSettings, homePage, preview }) {
  console.log(homePage);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Brannen.dev</title>
        </Head>
        <Content>
          {homePage && (
            <HeroPost
              title={homePage.title}
              coverImage={homePage.mainImage}
              body={homePage.body}
            />
          )}
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
