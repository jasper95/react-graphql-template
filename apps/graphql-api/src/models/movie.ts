import { Schema, model } from 'mongoose'
import { composeMongoose } from 'graphql-compose-mongoose'

const AwardSchema = new Schema({
  wins: Number,
  nominations: Number,
  text: String,
})
const ImdbSchema = new Schema({
  id: Number,
  rating: Number,
  votes: Number,
})
const ViewerSchema = new Schema({
  rating: Number,
  numReviews: Number,
  meter: Number,
})
const TomatoSchema = new Schema({
  viewer: ViewerSchema,
  lastUpdated: Date,
})
const MovieSchema = new Schema({
  plot: String,
  genres: [String],
  runtime: Number,
  cast: [String],
  title: String,
  fullplot: String,
  released: Date,
  rated: String,
  awards: AwardSchema,
  imdb: ImdbSchema,
  type: String,
  lastupdated: String,
  tomatoes: TomatoSchema,
})

export const MovieModel = model('Movie', MovieSchema, 'movies')
export const MovieTC = composeMongoose(MovieModel)
