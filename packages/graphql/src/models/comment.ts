import { Schema, model } from 'mongoose'
import { composeMongoose } from 'graphql-compose-mongoose'
import { MovieTC } from './movie'

const CommentSchema = new Schema({
  name: String,
  email: String,
  date: Date,
  text: String,
  movie_id: {
    type: Schema.Types.ObjectId,
    ref: 'Movie',
  },
})
export const CommentModel = model('Comment', CommentSchema, 'comments')
export const CommentTC = composeMongoose(CommentModel)

CommentTC.addRelation('movie', {
  resolver: () => MovieTC.mongooseResolvers.findById(),
  prepareArgs: {
    _id: (source) => source.movie_id,
  },
  projection: { movie_id: 1 },
})
