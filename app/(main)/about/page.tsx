import Layout from "@/components/Layout";
import { Metadata } from "next/types";
import { authors } from "@/sanity/utils";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About me",
  description: "About Page",
};

const about = () => {
  const author = authors.find((author) => author.slug === "sam-yung");
  return (
    <Layout noPaddingTop>
      {author && (
        <div className="min-h-[100vh] lg:px-[10vw] px-[8vw] flex flex-col justify-center items-center">
          {author.bioImage.asset.url && (
            <div>
              <Image
                className="xl:h-[200px] xl:w-[200px] md:h-[140px] md:w-[140px] h-[100px] w-[100px] object-contain rounded-full"
                src={author.bioImage.asset.url}
                placeholder="blur"
                blurDataURL={author.bioImage.asset.metadata.lqip}
                alt={author.bioImage.alt}
                width={author.bioImage.asset.metadata.dimensions.width}
                height={author.bioImage.asset.metadata.dimensions.height}
              />
            </div>
          )}
          <h1 className="font-gilroy text-primary-gray font-bold text-[2em] md:pt-12 md:pb-6 pt-8 pb-3">
            {author.name}
          </h1>
          <p className="md:text-black text-primary-gray md:tracking-wide tracking-normal md:leading-8 xl:mx-0 md:mx-[10vw] sm:mx-6 leading-7 xl:text-left text-center">
            {author.bio}
          </p>
        </div>
      )}
    </Layout>
  );
};

export default about;
