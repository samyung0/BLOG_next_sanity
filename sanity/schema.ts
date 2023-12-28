import post from './schema/post'
import embed from './schema/embed'
import author from './schema/author'
import tag from './schema/tag'
import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, embed, author, tag],
}
