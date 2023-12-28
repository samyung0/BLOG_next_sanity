import Layout from "@/components/Layout";
import PostPreview from "@/components/PostPreview";
import Tags from "@/components/Tags";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Blog Posts",
  description: "Main page for my blog posts.",
};

export default async function Home() {
  return (
    <Layout>
      <h1 className="font-mosk text-primary-gray font-bold md:text-[6em] text-[4em] pb-4 tracking-wider">
        Blog.
      </h1>
      <p className="md:text-black text-primary-gray md:tracking-wide tracking-normal max-w-5xl md:leading-7 leading-6">
        Here are all my blog posts about my journey into web development. I write about all kinds of
        framework and libraries I have tried and give an honest opinion about them from the
        perspective of a novice developer.
      </p>
      <PostPreview />
      <Tags />
    </Layout>
  );
}
