import { client } from "@/sanity/lib/client";
import { Author, Post, Tag } from "@/types";
import { groq } from "next-sanity";

export const posts = (await client.fetch(
  groq`*[_type == "post"] | order(publishedAt desc) {
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    thumbnail {
      alt,
      asset->,
    },
    content[] {
      ...,
      _type == "image" => {
        ...,
        asset->
      },
      markDefs[]{
        ...,
        _type == "internalLink" => {
          "slug": @.reference->slug.current,
          "type": @.reference->_type
        }
      }
    },
    "tags": tags[]->slug.current,
    "author": author->slug.current,
    "relatedPosts": relatedPosts[]->slug.current,
    readingTime
  }`, {} ,{cache: "no-store"}
)) as Post[];

export const authors = (await client.fetch(
  groq`
      *[_type == "author"] {
        _id,
        name,
        "slug": slug.current,
        bio,
        bioImage {
          alt,
          asset->
        }
      }
    `
)) as Author[];

export const tags = (await client.fetch(
  groq`
      *[_type == "tag"] {
        _id,
        name,
        "slug": slug.current
      }
    `
)) as Tag[];