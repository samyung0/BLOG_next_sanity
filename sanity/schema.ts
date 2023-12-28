import post from '@/sanity/schema/post'
import embed from '@/sanity/schema/embed'
import author from '@/sanity/schema/author'
import tag from '@/sanity/schema/tag'
import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, embed, author, tag],
}
