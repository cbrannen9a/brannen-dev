import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import {
  Content,
  Layout,
  MoreStories,
  Header,
  PostBody,
  PostHeader,
  SectionSeparator,
  PostTitle,
} from "@/components";

import { SITE_TITLE, urlForImage, usePreviewSubscription } from "@/lib/client";
import { postQuery, postSlugsQuery } from "@/lib/common";

import { sanityClient, getClient, overlayDrafts } from "@/lib/server";

export default function Post({ data = {}, preview }) {
  const router = useRouter();

  const slug = data?.post?.slug;
  const {
    data: { post, morePosts },
  } = usePreviewSubscription(postQuery, {
    params: { slug },
    initialData: data,
    enabled: preview && slug,
  });

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Content>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | {SITE_TITLE}
                </title>
                {post.mainImage && (
                  <meta
                    key="ogImage"
                    property="og:image"
                    content={urlForImage(post.mainImage)
                      .width(1200)
                      .height(627)
                      .fit("crop")
                      .url()}
                  />
                )}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.mainImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.body} />
            </article>
            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Content>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const { post, morePosts } = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  });

  return {
    props: {
      preview,
      data: {
        post,
        morePosts: overlayDrafts(morePosts),
      },
    },
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}
