import { posts, tags } from "@/sanity/utils";
import LabelSVG from "@/public/svg/pricetag-outline.svg";
import Image from "next/image";
import Link from "next/link";
const Tags = () => {
  const tagsNotEmpty: Record<string, (typeof tags)["0"]> = {};
  for (const post of posts) {
    for (const tag of post.tags) {
      if (!tagsNotEmpty.hasOwnProperty(tag)) {
        tagsNotEmpty[tag] = tags.find((tag2) => tag2.slug === tag)!;
      }
    }
  }
  return (
    <section className="md:py-[6vw] flex md:flex-row flex-col items-start xl:max-w-[1100px] xl:mx-auto lg:mx-[5vw] md:mx-[6vw] py-12 md:p-0">
      {Object.keys(tagsNotEmpty).length > 0 && (
        <>
          <h2 className="font-mosk text-primary-gray font-bold md:text-xl text-lg md:-mt-1 md:mb-0 mb-1 tracking-wide mr-12 leading-8">
            Tags{" "}
            <Image
              src={LabelSVG}
              alt=""
              className="md:h-6 md:w-6 w-5 h-5 inline-block md:mr-4 mr-2"
            />
            :
          </h2>
          <ul className="flex max-w-[800px] flex-wrap">
            {Object.values(tagsNotEmpty).map((tag) => (
              <li
                key={tag.slug}
                className="text-primary-gray font-bold tracking-wide mr-4 leading-8 md:text-base text-sm"
              >
                <Link prefetch href={`/tag/${tag.slug}`}>
                  {tag.name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default Tags;
