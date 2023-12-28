import Image from "next/image";
import { tags, posts } from "@/sanity/utils";
import { Post } from "@/types";
import TimeSVG from "@/public/svg/time-outline.svg";
import LabelsSVG from "@/public/svg/pricetags-outline.svg";
import LabelSVG from "@/public/svg/pricetag-outline.svg";
import Link from "next/link";
const PostPreview = ({
  tag,
  relatedPosts,
}: {
  tag?: string;
  relatedPosts?: Post["relatedPosts"];
}) => {
  return (
    <article>
      <div className="md:pt-[6vw] xl:max-w-[1200px] xl:mx-auto lg:mx-[5vw] md:mx-[6vw] pt-12 md:p-0">
        <ul className="grid xl:grid-cols-3 xl:gap-x-24 lg:gap-y-[6vw] lg:gap-x-24 sm:grid-cols-2 gap-12 grid-cols-1">
          {posts &&
            posts
              .filter((post) => !tag || post.tags.find((tag2) => tag2 === tag))
              .filter((post) => !relatedPosts || relatedPosts.includes(post.slug))
              .map((post) => (
                <li key={post.slug}>
                  <div className="text-center">
                    {post.thumbnail.asset.url && (
                      <Link prefetch className="inline-block" href={`/post/${post.slug}`}>
                        <Image
                          className="max-h-[230px] w-full object-contain object-bottom"
                          src={post.thumbnail.asset.url}
                          placeholder="blur"
                          blurDataURL={post.thumbnail.asset.metadata.lqip}
                          alt={post.thumbnail.alt || ""}
                          width={post.thumbnail.asset.metadata.dimensions.width}
                          height={post.thumbnail.asset.metadata.dimensions.height}
                        />
                      </Link>
                    )}
                  </div>
                  <div>
                    <div className="md:mt-2 bg-[linear-gradient(to_bottom,rgba(255,255,255,0)_50%,rgba(125,125,125,.255)_50%,rgba(255,255,255,0)_calc(50%+3px),rgba(255,255,255,0)_100%)]">
                      <span className="text-primary-gray tracking-wide md:text-xs text-[0.5rem] leading-4 font-bold bg-background-gray md:pr-4 pr-2">
                        {new Date(post._createdAt).toDateString().slice(4)}
                      </span>
                    </div>
                    <h3>
                      <Link
                        prefetch
                        className="pt-2 block font-bold tracking-wider md:text-xl text-lg text-primary-gray"
                        href={`/post/${post.slug}`}
                      >
                        {post.name}
                      </Link>
                    </h3>
                    <div className="pt-1 flex items-center space-x-2">
                      <span>
                        <Image className="md:h-5 md:w-5 h-3 w-3" src={TimeSVG} alt="" />
                      </span>
                      <span className="text-primary-gray tracking-wide md:text-sm text-xs md:font-bold">
                        {post.readTime && Number(post.readTime) > 0 ? post.readTime : "1"} min read
                      </span>
                    </div>
                    {tags.length > 0 && (
                      <div className="pt-1 flex items-center space-x-2">
                        <span>
                          {tags.length > 1 ? (
                            <Image
                              className="md:h-5 md:w-5 h-3 w-3 md:mt-0 mt-[2px]"
                              src={LabelsSVG}
                              alt=""
                            />
                          ) : (
                            <Image
                              className="md:h-5 md:w-5 h-3 w-3 md:mt-0 mt-[2px]"
                              src={LabelSVG}
                              alt=""
                            />
                          )}
                        </span>
                        <span>
                          {(() => {
                            let tagsDisplay: any = post.tags.map((slug) => {
                              const tag = tags.find((tag) => tag.slug === slug);
                              return (
                                tag && (
                                  <Link
                                    prefetch
                                    className="text-primary-gray tracking-wide md:text-sm text-xs md:font-bold"
                                    href={`/tag/${slug}`}
                                  >
                                    {tag.name}
                                  </Link>
                                )
                              );
                            });
                            if (tagsDisplay.length > 3) {
                              tagsDisplay = tagsDisplay.slice(0, 3);
                              tagsDisplay.push("...");
                            }
                            const ret = [];
                            ret.push(tagsDisplay[0]);
                            for (let i = 1; i < tagsDisplay.length; i++) {
                              ret.push(", ");
                              ret.push(tagsDisplay[i]);
                            }
                            return ret;
                          })()}
                        </span>
                      </div>
                    )}
                  </div>
                </li>
              ))}
        </ul>
      </div>
    </article>
  );
};

export default PostPreview;
