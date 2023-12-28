import type { Metadata } from "next";
import Layout from "@/components/Layout";
import PostPreview from "@/components/PostPreview";
import Tags from "@/components/Tags";
import { tags } from "@/sanity/utils";

type Props = {
  params: { tag: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tag = tags.find((tag2) => tag2.slug === params.tag)!;
  return {
    title: "Tag " + tag.name,
  };
}

export async function generateStaticParams() {
  console.log("TAGS:", tags);
  return tags.map((tag) => {
    return {
      params: {
        tag: tag.slug,
      },
    };
  });
}

const tagPage = ({ params: { tag } }: { params: { tag: string } }) => {
  const tagName = tags.find((tag2) => tag2.slug === tag)!;
  return (
    <Layout>
      <h1 className="font-mosk text-primary-gray font-bold  2xl:text-[4em] lg:text-[3em] text-[2em] pb-4 tracking-wider">
        Tag: {tagName.name}
      </h1>
      {/* <PostPreview tag={tag} /> */}
      <Tags />
    </Layout>
  );
};

export default tagPage;
