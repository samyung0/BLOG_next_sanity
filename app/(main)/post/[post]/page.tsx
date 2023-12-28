import Layout from "@/components/Layout";
import Prose from "@/components/Prose";
import RelatedPosts from "@/components/RelatedPosts";
import Tags from "@/components/Tags";
import { posts } from "@/sanity/utils";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ReactPlayer from "../../../../components/ReactPlayer";

// import hljs from 'highlight.js'
// import 'highlight.js/styles/github-dark.min.css';
import style from "react-syntax-highlighter/dist/esm/styles/prism/material-dark";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

type Props = {
  params: { post: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const name = posts.find((post) => post.slug === params.post)!.name;
  return {
    title: name,
  };
}

export async function generateStaticParams() {
  return posts.map((post) => {
    return {
      params: {
        post: post.slug,
      },
    };
  });
}

const postPage = ({ params }: { params: { post: string } }) => {
  const post = posts.find((post) => post.slug === params.post)!;
  return (
    <Layout>
      <h1 className="font-mosk text-primary-gray font-bold 2xl:text-[4em] lg:text-[3em] text-[2em] pb-4 tracking-wider">
        {post.name}
      </h1>
      <div className="md:pt-[6vw] xl:max-w-[1200px] xl:mx-auto lg:mx-[5vw] md:mx-[6vw] pt-12 md:p-0 md:tracking-wide md:leading-8 leading-6">
        <Prose>
          <PortableText
            value={post.content}
            components={{
              types: {
                image: (props) => {
                  return (
                    <figure>
                      <Image
                        src={props.value.asset.url}
                        alt=""
                        placeholder="blur"
                        blurDataURL={props.value.asset.metadata.lqip}
                        width={props.value.asset.metadata.dimensions.width}
                        height={props.value.asset.metadata.dimensions.height}
                      />
                      {props.value.caption && <figcaption>{props.value.caption}</figcaption>}
                    </figure>
                  );
                },
                code: (props) => {
                  const codeBlock = (
                    <SyntaxHighlighter
                      style={style}
                      language={props.value.language ?? "javascript"}
                      showLineNumbers
                      wrapLines
                      lineProps={(lineNumber: number) => {
                        return {
                          markedlines: (props.value.highlightedLines ?? []).includes(lineNumber)
                            ? "1"
                            : "0",
                        } as React.HTMLProps<HTMLElement>;
                      }}
                      className="shadow-lg"
                      filename={props.value.filename ? "1" : "0"}
                    >
                      {props.value.code}
                    </SyntaxHighlighter>
                  );
                  return props.value.filename ? (
                    <>
                      <div className="bg-code-editor text-background-gray inline-block px-5 py-1 text">
                        {props.value.filename}
                      </div>
                      {codeBlock}
                    </>
                  ) : (
                    codeBlock
                  );
                },
                embed: (props: any) => {
                  const url = props.value.url;
                  return <ReactPlayer url={url} />;
                },
              },
              marks: {
                internalLink: (props) => {
                  return (
                    <Link prefetch href={`/${props.value.type}/${props.value.slug}`}>
                      {props.children}
                    </Link>
                  );
                },
                link: (props) => {
                  const { blank, href } = props.value;
                  return blank ? (
                    <Link prefetch href={href} target="_blank" rel="noopener">
                      {props.children}
                    </Link>
                  ) : (
                    <Link prefetch href={href}>
                      {props.children}
                    </Link>
                  );
                },
              },
            }}
          />
        </Prose>
      </div>
      <Tags />
      <RelatedPosts post={post.relatedPosts} />
    </Layout>
  );
};

export default postPage;
