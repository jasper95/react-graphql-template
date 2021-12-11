import { CommentTC } from '../models/comment'
import { MovieTC } from '../models/movie'
import { generateGraphqlSchema } from './schema-generator'
import { schemaComposer } from 'graphql-compose'

const objectComposers = [CommentTC, MovieTC]

objectComposers.forEach(generateGraphqlSchema)

const schema = schemaComposer.buildSchema()
export default schema
