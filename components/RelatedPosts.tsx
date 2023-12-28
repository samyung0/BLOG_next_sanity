import Image from "next/image";
import { posts } from "@/sanity/utils";
import PostPreview from "./PostPreview";
import { Post } from "@/types";
import RelatedPostSVG from "@/public/svg/document-outline.svg";
import RelatedPostsSVG from "@/public/svg/documents-outline.svg";

const RelatedPosts = ({ post }: { post: Post["relatedPosts"] }) => {
  const relatedPosts =
    post && posts.filter((relatedPost) => post.find((slug) => slug === relatedPost.slug));

  return (
    relatedPosts && (
      <section className="md:pb-[6vw] flex flex-col items-stretch xl:max-w-[1100px] xl:mx-auto lg:mx-[5vw] md:mx-[6vw] pb-12 md:p-0">
        <h2 className="font-mosk text-primary-gray font-bold md:text-xl text-lg tracking-wide leading-8">
          <span className="pr-1">Related Post{relatedPosts.length > 0 ? "s" : ""}</span>
          {relatedPosts.length > 0 ? (
            <Image
              src={RelatedPostsSVG}
              alt=""
              className="md:h-6 md:w-6 w-5 h-5 inline-block md:mr-4 mr-2"
            />
          ) : (
            <Image
              src={RelatedPostSVG}
              alt=""
              className="md:h-6 md:w-6 w-5 h-5 inline-block md:mr-4 mr-2"
            />
          )}
          :
        </h2>
        <div>
          <PostPreview relatedPosts={relatedPosts.map((post: any) => post.slug)} />
        </div>
      </section>
    )
  );
};

export default RelatedPosts;
