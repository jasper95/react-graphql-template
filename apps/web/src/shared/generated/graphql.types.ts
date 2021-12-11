export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Date: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
  /** The `ID` scalar type represents a unique MongoDB identifier in collection. MongoDB by default use 12-byte ObjectId value (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB also may accepts string or integer as correct values for _id field. */
  MongoID: any
}

export type Comment = {
  __typename?: 'Comment'
  _id: Scalars['MongoID']
  date?: Maybe<Scalars['Date']>
  email?: Maybe<Scalars['String']>
  movie?: Maybe<Movie>
  movie_id?: Maybe<Scalars['MongoID']>
  name?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
}

/** A connection to a list of items. */
export type CommentConnection = {
  __typename?: 'CommentConnection'
  /** Total object count. */
  count: Scalars['Int']
  /** Information to aid in pagination. */
  edges: Array<CommentEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An edge in a connection. */
export type CommentEdge = {
  __typename?: 'CommentEdge'
  /** A cursor for use in pagination */
  cursor: Scalars['String']
  /** The item at the end of the edge */
  node: Comment
}

/** List of items with pagination. */
export type CommentPagination = {
  __typename?: 'CommentPagination'
  /** Total object count. */
  count?: Maybe<Scalars['Int']>
  /** Array of objects. */
  items?: Maybe<Array<Comment>>
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo
}

export type CreateManyCommentInput = {
  date?: InputMaybe<Scalars['Date']>
  email?: InputMaybe<Scalars['String']>
  movie_id?: InputMaybe<Scalars['MongoID']>
  name?: InputMaybe<Scalars['String']>
  text?: InputMaybe<Scalars['String']>
}

export type CreateManyCommentPayload = {
  __typename?: 'CreateManyCommentPayload'
  /** Number of created documents */
  createdCount: Scalars['Int']
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>
  /** Created documents */
  records?: Maybe<Array<Comment>>
}

export type CreateManyMovieInput = {
  awards?: InputMaybe<MovieAwardsInput>
  cast?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  fullplot?: InputMaybe<Scalars['String']>
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  imdb?: InputMaybe<MovieImdbInput>
  lastupdated?: InputMaybe<Scalars['String']>
  plot?: InputMaybe<Scalars['String']>
  rated?: InputMaybe<Scalars['String']>
  released?: InputMaybe<Scalars['Date']>
  runtime?: InputMaybe<Scalars['Float']>
  title?: InputMaybe<Scalars['String']>
  tomatoes?: InputMaybe<MovieTomatoesInput>
  type?: InputMaybe<Scalars['String']>
}

export type CreateManyMoviePayload = {
  __typename?: 'CreateManyMoviePayload'
  /** Number of created documents */
  createdCount: Scalars['Int']
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>
  /** Created documents */
  records?: Maybe<Array<Movie>>
}

export type CreateOneCommentInput = {
  date?: InputMaybe<Scalars['Date']>
  email?: InputMaybe<Scalars['String']>
  movie_id?: InputMaybe<Scalars['MongoID']>
  name?: InputMaybe<Scalars['String']>
  text?: InputMaybe<Scalars['String']>
}

export type CreateOneCommentPayload = {
  __typename?: 'CreateOneCommentPayload'
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>
  /** Created document */
  record?: Maybe<Comment>
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>
}

export type CreateOneMovieInput = {
  awards?: InputMaybe<MovieAwardsInput>
  cast?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  fullplot?: InputMaybe<Scalars['String']>
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  imdb?: InputMaybe<MovieImdbInput>
  lastupdated?: InputMaybe<Scalars['String']>
  plot?: InputMaybe<Scalars['String']>
  rated?: InputMaybe<Scalars['String']>
  released?: InputMaybe<Scalars['Date']>
  runtime?: InputMaybe<Scalars['Float']>
  title?: InputMaybe<Scalars['String']>
  tomatoes?: InputMaybe<MovieTomatoesInput>
  type?: InputMaybe<Scalars['String']>
}

export type CreateOneMoviePayload = {
  __typename?: 'CreateOneMoviePayload'
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>
  /** Created document */
  record?: Maybe<Movie>
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>
}

export type ErrorInterface = {
  /** Generic error message */
  message?: Maybe<Scalars['String']>
}

export type FilterCountCommentInput = {
  AND?: InputMaybe<Array<FilterCountCommentInput>>
  OR?: InputMaybe<Array<FilterCountCommentInput>>
  _id?: InputMaybe<Scalars['MongoID']>
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCountCommentOperatorsInput>
  date?: InputMaybe<Scalars['Date']>
  email?: InputMaybe<Scalars['String']>
  movie_id?: InputMaybe<Scalars['MongoID']>
  name?: InputMaybe<Scalars['String']>
  text?: InputMaybe<Scalars['String']>
}

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountCommentOperatorsInput = {
  _id?: InputMaybe<FilterCountComment_IdOperatorsInput>
}

export type FilterCountComment_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>
  gt?: InputMaybe<Scalars['MongoID']>
  gte?: InputMaybe<Scalars['MongoID']>
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
  lt?: InputMaybe<Scalars['MongoID']>
  lte?: InputMaybe<Scalars['MongoID']>
  ne?: InputMaybe<Scalars['MongoID']>
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
}

export type FilterCountMovieAwardsInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  nominations?: InputMaybe<Scalars['Float']>
  text?: InputMaybe<Scalars['String']>
  wins?: InputMaybe<Scalars['Float']>
}

export type FilterCountMovieImdbInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  id?: InputMaybe<Scalars['Float']>
  rating?: InputMaybe<Scalars['Float']>
  votes?: InputMaybe<Scalars['Float']>
}

export type FilterCountMovieInput = {
  AND?: InputMaybe<Array<FilterCountMovieInput>>
  OR?: InputMaybe<Array<FilterCountMovieInput>>
  _id?: InputMaybe<Scalars['MongoID']>
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCountMovieOperatorsInput>
  awards?: InputMaybe<FilterCountMovieAwardsInput>
  cast?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  fullplot?: InputMaybe<Scalars['String']>
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  imdb?: InputMaybe<FilterCountMovieImdbInput>
  lastupdated?: InputMaybe<Scalars['String']>
  plot?: InputMaybe<Scalars['String']>
  rated?: InputMaybe<Scalars['String']>
  released?: InputMaybe<Scalars['Date']>
  runtime?: InputMaybe<Scalars['Float']>
  title?: InputMaybe<Scalars['String']>
  tomatoes?: InputMaybe<FilterCountMovieTomatoesInput>
  type?: InputMaybe<Scalars['String']>
}

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountMovieOperatorsInput = {
  _id?: InputMaybe<FilterCountMovie_IdOperatorsInput>
}

export type FilterCountMovieTomatoesInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  lastUpdated?: InputMaybe<Scalars['Date']>
  viewer?: InputMaybe<FilterCountMovieTomatoesViewerInput>
}

export type FilterCountMovieTomatoesViewerInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  meter?: InputMaybe<Scalars['Float']>
  numReviews?: InputMaybe<Scalars['Float']>
  rating?: InputMaybe<Scalars['Float']>
}

export type FilterCountMovie_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>
  gt?: InputMaybe<Scalars['MongoID']>
  gte?: InputMaybe<Scalars['MongoID']>
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
  lt?: InputMaybe<Scalars['MongoID']>
  lte?: InputMaybe<Scalars['MongoID']>
  ne?: InputMaybe<Scalars['MongoID']>
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
}

export type FilterFindManyCommentInput = {
  AND?: InputMaybe<Array<FilterFindManyCommentInput>>
  OR?: InputMaybe<Array<FilterFindManyCommentInput>>
  _id?: InputMaybe<Scalars['MongoID']>
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyCommentOperatorsInput>
  date?: InputMaybe<Scalars['Date']>
  email?: InputMaybe<Scalars['String']>
  movie_id?: InputMaybe<Scalars['MongoID']>
  name?: InputMaybe<Scalars['String']>
  text?: InputMaybe<Scalars['String']>
}

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyCommentOperatorsInput = {
  _id?: InputMaybe<FilterFindManyComment_IdOperatorsInput>
}

export type FilterFindManyComment_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>
  gt?: InputMaybe<Scalars['MongoID']>
  gte?: InputMaybe<Scalars['MongoID']>
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
  lt?: InputMaybe<Scalars['MongoID']>
  lte?: InputMaybe<Scalars['MongoID']>
  ne?: InputMaybe<Scalars['MongoID']>
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
}

export type FilterFindManyMovieAwardsInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  nominations?: InputMaybe<Scalars['Float']>
  text?: InputMaybe<Scalars['String']>
  wins?: InputMaybe<Scalars['Float']>
}

export type FilterFindManyMovieImdbInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  id?: InputMaybe<Scalars['Float']>
  rating?: InputMaybe<Scalars['Float']>
  votes?: InputMaybe<Scalars['Float']>
}

export type FilterFindManyMovieInput = {
  AND?: InputMaybe<Array<FilterFindManyMovieInput>>
  OR?: InputMaybe<Array<FilterFindManyMovieInput>>
  _id?: InputMaybe<Scalars['MongoID']>
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyMovieOperatorsInput>
  awards?: InputMaybe<FilterFindManyMovieAwardsInput>
  cast?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  fullplot?: InputMaybe<Scalars['String']>
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  imdb?: InputMaybe<FilterFindManyMovieImdbInput>
  lastupdated?: InputMaybe<Scalars['String']>
  plot?: InputMaybe<Scalars['String']>
  rated?: InputMaybe<Scalars['String']>
  released?: InputMaybe<Scalars['Date']>
  runtime?: InputMaybe<Scalars['Float']>
  title?: InputMaybe<Scalars['String']>
  tomatoes?: InputMaybe<FilterFindManyMovieTomatoesInput>
  type?: InputMaybe<Scalars['String']>
}

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyMovieOperatorsInput = {
  _id?: InputMaybe<FilterFindManyMovie_IdOperatorsInput>
}

export type FilterFindManyMovieTomatoesInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  lastUpdated?: InputMaybe<Scalars['Date']>
  viewer?: InputMaybe<FilterFindManyMovieTomatoesViewerInput>
}

export type FilterFindManyMovieTomatoesViewerInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  meter?: InputMaybe<Scalars['Float']>
  numReviews?: InputMaybe<Scalars['Float']>
  rating?: InputMaybe<Scalars['Float']>
}

export type FilterFindManyMovie_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>
  gt?: InputMaybe<Scalars['MongoID']>
  gte?: InputMaybe<Scalars['MongoID']>
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
  lt?: InputMaybe<Scalars['MongoID']>
  lte?: InputMaybe<Scalars['MongoID']>
  ne?: InputMaybe<Scalars['MongoID']>
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
}

export type FilterFindOneCommentInput = {
  AND?: InputMaybe<Array<FilterFindOneCommentInput>>
  OR?: InputMaybe<Array<FilterFindOneCommentInput>>
  _id?: InputMaybe<Scalars['MongoID']>
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneCommentOperatorsInput>
  date?: InputMaybe<Scalars['Date']>
  email?: InputMaybe<Scalars['String']>
  movie_id?: InputMaybe<Scalars['MongoID']>
  name?: InputMaybe<Scalars['String']>
  text?: InputMaybe<Scalars['String']>
}

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneCommentOperatorsInput = {
  _id?: InputMaybe<FilterFindOneComment_IdOperatorsInput>
}

export type FilterFindOneComment_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>
  gt?: InputMaybe<Scalars['MongoID']>
  gte?: InputMaybe<Scalars['MongoID']>
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
  lt?: InputMaybe<Scalars['MongoID']>
  lte?: InputMaybe<Scalars['MongoID']>
  ne?: InputMaybe<Scalars['MongoID']>
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
}

export type FilterFindOneMovieAwardsInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  nominations?: InputMaybe<Scalars['Float']>
  text?: InputMaybe<Scalars['String']>
  wins?: InputMaybe<Scalars['Float']>
}

export type FilterFindOneMovieImdbInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  id?: InputMaybe<Scalars['Float']>
  rating?: InputMaybe<Scalars['Float']>
  votes?: InputMaybe<Scalars['Float']>
}

export type FilterFindOneMovieInput = {
  AND?: InputMaybe<Array<FilterFindOneMovieInput>>
  OR?: InputMaybe<Array<FilterFindOneMovieInput>>
  _id?: InputMaybe<Scalars['MongoID']>
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneMovieOperatorsInput>
  awards?: InputMaybe<FilterFindOneMovieAwardsInput>
  cast?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  fullplot?: InputMaybe<Scalars['String']>
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  imdb?: InputMaybe<FilterFindOneMovieImdbInput>
  lastupdated?: InputMaybe<Scalars['String']>
  plot?: InputMaybe<Scalars['String']>
  rated?: InputMaybe<Scalars['String']>
  released?: InputMaybe<Scalars['Date']>
  runtime?: InputMaybe<Scalars['Float']>
  title?: InputMaybe<Scalars['String']>
  tomatoes?: InputMaybe<FilterFindOneMovieTomatoesInput>
  type?: InputMaybe<Scalars['String']>
}

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneMovieOperatorsInput = {
  _id?: InputMaybe<FilterFindOneMovie_IdOperatorsInput>
}

export type FilterFindOneMovieTomatoesInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  lastUpdated?: InputMaybe<Scalars['Date']>
  viewer?: InputMaybe<FilterFindOneMovieTomatoesViewerInput>
}

export type FilterFindOneMovieTomatoesViewerInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  meter?: InputMaybe<Scalars['Float']>
  numReviews?: InputMaybe<Scalars['Float']>
  rating?: InputMaybe<Scalars['Float']>
}

export type FilterFindOneMovie_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>
  gt?: InputMaybe<Scalars['MongoID']>
  gte?: InputMaybe<Scalars['MongoID']>
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
  lt?: InputMaybe<Scalars['MongoID']>
  lte?: InputMaybe<Scalars['MongoID']>
  ne?: InputMaybe<Scalars['MongoID']>
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
}

export type FilterRemoveManyCommentInput = {
  AND?: InputMaybe<Array<FilterRemoveManyCommentInput>>
  OR?: InputMaybe<Array<FilterRemoveManyCommentInput>>
  _id?: InputMaybe<Scalars['MongoID']>
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveManyCommentOperatorsInput>
  date?: InputMaybe<Scalars['Date']>
  email?: InputMaybe<Scalars['String']>
  movie_id?: InputMaybe<Scalars['MongoID']>
  name?: InputMaybe<Scalars['String']>
  text?: InputMaybe<Scalars['String']>
}

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyCommentOperatorsInput = {
  _id?: InputMaybe<FilterRemoveManyComment_IdOperatorsInput>
}

export type FilterRemoveManyComment_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>
  gt?: InputMaybe<Scalars['MongoID']>
  gte?: InputMaybe<Scalars['MongoID']>
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
  lt?: InputMaybe<Scalars['MongoID']>
  lte?: InputMaybe<Scalars['MongoID']>
  ne?: InputMaybe<Scalars['MongoID']>
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
}

export type FilterRemoveManyMovieAwardsInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  nominations?: InputMaybe<Scalars['Float']>
  text?: InputMaybe<Scalars['String']>
  wins?: InputMaybe<Scalars['Float']>
}

export type FilterRemoveManyMovieImdbInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  id?: InputMaybe<Scalars['Float']>
  rating?: InputMaybe<Scalars['Float']>
  votes?: InputMaybe<Scalars['Float']>
}

export type FilterRemoveManyMovieInput = {
  AND?: InputMaybe<Array<FilterRemoveManyMovieInput>>
  OR?: InputMaybe<Array<FilterRemoveManyMovieInput>>
  _id?: InputMaybe<Scalars['MongoID']>
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveManyMovieOperatorsInput>
  awards?: InputMaybe<FilterRemoveManyMovieAwardsInput>
  cast?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  fullplot?: InputMaybe<Scalars['String']>
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  imdb?: InputMaybe<FilterRemoveManyMovieImdbInput>
  lastupdated?: InputMaybe<Scalars['String']>
  plot?: InputMaybe<Scalars['String']>
  rated?: InputMaybe<Scalars['String']>
  released?: InputMaybe<Scalars['Date']>
  runtime?: InputMaybe<Scalars['Float']>
  title?: InputMaybe<Scalars['String']>
  tomatoes?: InputMaybe<FilterRemoveManyMovieTomatoesInput>
  type?: InputMaybe<Scalars['String']>
}

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyMovieOperatorsInput = {
  _id?: InputMaybe<FilterRemoveManyMovie_IdOperatorsInput>
}

export type FilterRemoveManyMovieTomatoesInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  lastUpdated?: InputMaybe<Scalars['Date']>
  viewer?: InputMaybe<FilterRemoveManyMovieTomatoesViewerInput>
}

export type FilterRemoveManyMovieTomatoesViewerInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  meter?: InputMaybe<Scalars['Float']>
  numReviews?: InputMaybe<Scalars['Float']>
  rating?: InputMaybe<Scalars['Float']>
}

export type FilterRemoveManyMovie_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>
  gt?: InputMaybe<Scalars['MongoID']>
  gte?: InputMaybe<Scalars['MongoID']>
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
  lt?: InputMaybe<Scalars['MongoID']>
  lte?: InputMaybe<Scalars['MongoID']>
  ne?: InputMaybe<Scalars['MongoID']>
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
}

export type FilterRemoveOneCommentInput = {
  AND?: InputMaybe<Array<FilterRemoveOneCommentInput>>
  OR?: InputMaybe<Array<FilterRemoveOneCommentInput>>
  _id?: InputMaybe<Scalars['MongoID']>
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneCommentOperatorsInput>
  date?: InputMaybe<Scalars['Date']>
  email?: InputMaybe<Scalars['String']>
  movie_id?: InputMaybe<Scalars['MongoID']>
  name?: InputMaybe<Scalars['String']>
  text?: InputMaybe<Scalars['String']>
}

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneCommentOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneComment_IdOperatorsInput>
}

export type FilterRemoveOneComment_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>
  gt?: InputMaybe<Scalars['MongoID']>
  gte?: InputMaybe<Scalars['MongoID']>
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
  lt?: InputMaybe<Scalars['MongoID']>
  lte?: InputMaybe<Scalars['MongoID']>
  ne?: InputMaybe<Scalars['MongoID']>
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
}

export type FilterRemoveOneMovieAwardsInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  nominations?: InputMaybe<Scalars['Float']>
  text?: InputMaybe<Scalars['String']>
  wins?: InputMaybe<Scalars['Float']>
}

export type FilterRemoveOneMovieImdbInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  id?: InputMaybe<Scalars['Float']>
  rating?: InputMaybe<Scalars['Float']>
  votes?: InputMaybe<Scalars['Float']>
}

export type FilterRemoveOneMovieInput = {
  AND?: InputMaybe<Array<FilterRemoveOneMovieInput>>
  OR?: InputMaybe<Array<FilterRemoveOneMovieInput>>
  _id?: InputMaybe<Scalars['MongoID']>
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterRemoveOneMovieOperatorsInput>
  awards?: InputMaybe<FilterRemoveOneMovieAwardsInput>
  cast?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  fullplot?: InputMaybe<Scalars['String']>
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  imdb?: InputMaybe<FilterRemoveOneMovieImdbInput>
  lastupdated?: InputMaybe<Scalars['String']>
  plot?: InputMaybe<Scalars['String']>
  rated?: InputMaybe<Scalars['String']>
  released?: InputMaybe<Scalars['Date']>
  runtime?: InputMaybe<Scalars['Float']>
  title?: InputMaybe<Scalars['String']>
  tomatoes?: InputMaybe<FilterRemoveOneMovieTomatoesInput>
  type?: InputMaybe<Scalars['String']>
}

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneMovieOperatorsInput = {
  _id?: InputMaybe<FilterRemoveOneMovie_IdOperatorsInput>
}

export type FilterRemoveOneMovieTomatoesInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  lastUpdated?: InputMaybe<Scalars['Date']>
  viewer?: InputMaybe<FilterRemoveOneMovieTomatoesViewerInput>
}

export type FilterRemoveOneMovieTomatoesViewerInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  meter?: InputMaybe<Scalars['Float']>
  numReviews?: InputMaybe<Scalars['Float']>
  rating?: InputMaybe<Scalars['Float']>
}

export type FilterRemoveOneMovie_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>
  gt?: InputMaybe<Scalars['MongoID']>
  gte?: InputMaybe<Scalars['MongoID']>
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
  lt?: InputMaybe<Scalars['MongoID']>
  lte?: InputMaybe<Scalars['MongoID']>
  ne?: InputMaybe<Scalars['MongoID']>
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
}

export type FilterUpdateManyCommentInput = {
  AND?: InputMaybe<Array<FilterUpdateManyCommentInput>>
  OR?: InputMaybe<Array<FilterUpdateManyCommentInput>>
  _id?: InputMaybe<Scalars['MongoID']>
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateManyCommentOperatorsInput>
  date?: InputMaybe<Scalars['Date']>
  email?: InputMaybe<Scalars['String']>
  movie_id?: InputMaybe<Scalars['MongoID']>
  name?: InputMaybe<Scalars['String']>
  text?: InputMaybe<Scalars['String']>
}

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyCommentOperatorsInput = {
  _id?: InputMaybe<FilterUpdateManyComment_IdOperatorsInput>
}

export type FilterUpdateManyComment_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>
  gt?: InputMaybe<Scalars['MongoID']>
  gte?: InputMaybe<Scalars['MongoID']>
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
  lt?: InputMaybe<Scalars['MongoID']>
  lte?: InputMaybe<Scalars['MongoID']>
  ne?: InputMaybe<Scalars['MongoID']>
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
}

export type FilterUpdateManyMovieAwardsInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  nominations?: InputMaybe<Scalars['Float']>
  text?: InputMaybe<Scalars['String']>
  wins?: InputMaybe<Scalars['Float']>
}

export type FilterUpdateManyMovieImdbInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  id?: InputMaybe<Scalars['Float']>
  rating?: InputMaybe<Scalars['Float']>
  votes?: InputMaybe<Scalars['Float']>
}

export type FilterUpdateManyMovieInput = {
  AND?: InputMaybe<Array<FilterUpdateManyMovieInput>>
  OR?: InputMaybe<Array<FilterUpdateManyMovieInput>>
  _id?: InputMaybe<Scalars['MongoID']>
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateManyMovieOperatorsInput>
  awards?: InputMaybe<FilterUpdateManyMovieAwardsInput>
  cast?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  fullplot?: InputMaybe<Scalars['String']>
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  imdb?: InputMaybe<FilterUpdateManyMovieImdbInput>
  lastupdated?: InputMaybe<Scalars['String']>
  plot?: InputMaybe<Scalars['String']>
  rated?: InputMaybe<Scalars['String']>
  released?: InputMaybe<Scalars['Date']>
  runtime?: InputMaybe<Scalars['Float']>
  title?: InputMaybe<Scalars['String']>
  tomatoes?: InputMaybe<FilterUpdateManyMovieTomatoesInput>
  type?: InputMaybe<Scalars['String']>
}

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyMovieOperatorsInput = {
  _id?: InputMaybe<FilterUpdateManyMovie_IdOperatorsInput>
}

export type FilterUpdateManyMovieTomatoesInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  lastUpdated?: InputMaybe<Scalars['Date']>
  viewer?: InputMaybe<FilterUpdateManyMovieTomatoesViewerInput>
}

export type FilterUpdateManyMovieTomatoesViewerInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  meter?: InputMaybe<Scalars['Float']>
  numReviews?: InputMaybe<Scalars['Float']>
  rating?: InputMaybe<Scalars['Float']>
}

export type FilterUpdateManyMovie_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>
  gt?: InputMaybe<Scalars['MongoID']>
  gte?: InputMaybe<Scalars['MongoID']>
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
  lt?: InputMaybe<Scalars['MongoID']>
  lte?: InputMaybe<Scalars['MongoID']>
  ne?: InputMaybe<Scalars['MongoID']>
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
}

export type FilterUpdateOneCommentInput = {
  AND?: InputMaybe<Array<FilterUpdateOneCommentInput>>
  OR?: InputMaybe<Array<FilterUpdateOneCommentInput>>
  _id?: InputMaybe<Scalars['MongoID']>
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneCommentOperatorsInput>
  date?: InputMaybe<Scalars['Date']>
  email?: InputMaybe<Scalars['String']>
  movie_id?: InputMaybe<Scalars['MongoID']>
  name?: InputMaybe<Scalars['String']>
  text?: InputMaybe<Scalars['String']>
}

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneCommentOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneComment_IdOperatorsInput>
}

export type FilterUpdateOneComment_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>
  gt?: InputMaybe<Scalars['MongoID']>
  gte?: InputMaybe<Scalars['MongoID']>
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
  lt?: InputMaybe<Scalars['MongoID']>
  lte?: InputMaybe<Scalars['MongoID']>
  ne?: InputMaybe<Scalars['MongoID']>
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
}

export type FilterUpdateOneMovieAwardsInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  nominations?: InputMaybe<Scalars['Float']>
  text?: InputMaybe<Scalars['String']>
  wins?: InputMaybe<Scalars['Float']>
}

export type FilterUpdateOneMovieImdbInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  id?: InputMaybe<Scalars['Float']>
  rating?: InputMaybe<Scalars['Float']>
  votes?: InputMaybe<Scalars['Float']>
}

export type FilterUpdateOneMovieInput = {
  AND?: InputMaybe<Array<FilterUpdateOneMovieInput>>
  OR?: InputMaybe<Array<FilterUpdateOneMovieInput>>
  _id?: InputMaybe<Scalars['MongoID']>
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterUpdateOneMovieOperatorsInput>
  awards?: InputMaybe<FilterUpdateOneMovieAwardsInput>
  cast?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  fullplot?: InputMaybe<Scalars['String']>
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  imdb?: InputMaybe<FilterUpdateOneMovieImdbInput>
  lastupdated?: InputMaybe<Scalars['String']>
  plot?: InputMaybe<Scalars['String']>
  rated?: InputMaybe<Scalars['String']>
  released?: InputMaybe<Scalars['Date']>
  runtime?: InputMaybe<Scalars['Float']>
  title?: InputMaybe<Scalars['String']>
  tomatoes?: InputMaybe<FilterUpdateOneMovieTomatoesInput>
  type?: InputMaybe<Scalars['String']>
}

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneMovieOperatorsInput = {
  _id?: InputMaybe<FilterUpdateOneMovie_IdOperatorsInput>
}

export type FilterUpdateOneMovieTomatoesInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  lastUpdated?: InputMaybe<Scalars['Date']>
  viewer?: InputMaybe<FilterUpdateOneMovieTomatoesViewerInput>
}

export type FilterUpdateOneMovieTomatoesViewerInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  meter?: InputMaybe<Scalars['Float']>
  numReviews?: InputMaybe<Scalars['Float']>
  rating?: InputMaybe<Scalars['Float']>
}

export type FilterUpdateOneMovie_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']>
  gt?: InputMaybe<Scalars['MongoID']>
  gte?: InputMaybe<Scalars['MongoID']>
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
  lt?: InputMaybe<Scalars['MongoID']>
  lte?: InputMaybe<Scalars['MongoID']>
  ne?: InputMaybe<Scalars['MongoID']>
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']>>>
}

export type MongoError = ErrorInterface & {
  __typename?: 'MongoError'
  /** MongoDB error code */
  code?: Maybe<Scalars['Int']>
  /** MongoDB error message */
  message?: Maybe<Scalars['String']>
}

export type Movie = {
  __typename?: 'Movie'
  _id: Scalars['MongoID']
  awards?: Maybe<MovieAwards>
  cast?: Maybe<Array<Maybe<Scalars['String']>>>
  fullplot?: Maybe<Scalars['String']>
  genres?: Maybe<Array<Maybe<Scalars['String']>>>
  imdb?: Maybe<MovieImdb>
  lastupdated?: Maybe<Scalars['String']>
  plot?: Maybe<Scalars['String']>
  rated?: Maybe<Scalars['String']>
  released?: Maybe<Scalars['Date']>
  runtime?: Maybe<Scalars['Float']>
  title?: Maybe<Scalars['String']>
  tomatoes?: Maybe<MovieTomatoes>
  type?: Maybe<Scalars['String']>
}

export type MovieAwards = {
  __typename?: 'MovieAwards'
  _id?: Maybe<Scalars['MongoID']>
  nominations?: Maybe<Scalars['Float']>
  text?: Maybe<Scalars['String']>
  wins?: Maybe<Scalars['Float']>
}

export type MovieAwardsInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  nominations?: InputMaybe<Scalars['Float']>
  text?: InputMaybe<Scalars['String']>
  wins?: InputMaybe<Scalars['Float']>
}

/** A connection to a list of items. */
export type MovieConnection = {
  __typename?: 'MovieConnection'
  /** Total object count. */
  count: Scalars['Int']
  /** Information to aid in pagination. */
  edges: Array<MovieEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** An edge in a connection. */
export type MovieEdge = {
  __typename?: 'MovieEdge'
  /** A cursor for use in pagination */
  cursor: Scalars['String']
  /** The item at the end of the edge */
  node: Movie
}

export type MovieImdb = {
  __typename?: 'MovieImdb'
  _id?: Maybe<Scalars['MongoID']>
  id?: Maybe<Scalars['Float']>
  rating?: Maybe<Scalars['Float']>
  votes?: Maybe<Scalars['Float']>
}

export type MovieImdbInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  id?: InputMaybe<Scalars['Float']>
  rating?: InputMaybe<Scalars['Float']>
  votes?: InputMaybe<Scalars['Float']>
}

/** List of items with pagination. */
export type MoviePagination = {
  __typename?: 'MoviePagination'
  /** Total object count. */
  count?: Maybe<Scalars['Int']>
  /** Array of objects. */
  items?: Maybe<Array<Movie>>
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo
}

export type MovieTomatoes = {
  __typename?: 'MovieTomatoes'
  _id?: Maybe<Scalars['MongoID']>
  lastUpdated?: Maybe<Scalars['Date']>
  viewer?: Maybe<MovieTomatoesViewer>
}

export type MovieTomatoesInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  lastUpdated?: InputMaybe<Scalars['Date']>
  viewer?: InputMaybe<MovieTomatoesViewerInput>
}

export type MovieTomatoesViewer = {
  __typename?: 'MovieTomatoesViewer'
  _id?: Maybe<Scalars['MongoID']>
  meter?: Maybe<Scalars['Float']>
  numReviews?: Maybe<Scalars['Float']>
  rating?: Maybe<Scalars['Float']>
}

export type MovieTomatoesViewerInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  meter?: InputMaybe<Scalars['Float']>
  numReviews?: InputMaybe<Scalars['Float']>
  rating?: InputMaybe<Scalars['Float']>
}

export type Mutation = {
  __typename?: 'Mutation'
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  commentCreateMany?: Maybe<CreateManyCommentPayload>
  /** Create one document with mongoose defaults, setters, hooks and validation */
  commentCreateOne?: Maybe<CreateOneCommentPayload>
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  commentRemoveById?: Maybe<RemoveByIdCommentPayload>
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  commentRemoveMany?: Maybe<RemoveManyCommentPayload>
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  commentRemoveOne?: Maybe<RemoveOneCommentPayload>
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  commentUpdateById?: Maybe<UpdateByIdCommentPayload>
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  commentUpdateMany?: Maybe<UpdateManyCommentPayload>
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  commentUpdateOne?: Maybe<UpdateOneCommentPayload>
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  movieCreateMany?: Maybe<CreateManyMoviePayload>
  /** Create one document with mongoose defaults, setters, hooks and validation */
  movieCreateOne?: Maybe<CreateOneMoviePayload>
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  movieRemoveById?: Maybe<RemoveByIdMoviePayload>
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  movieRemoveMany?: Maybe<RemoveManyMoviePayload>
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  movieRemoveOne?: Maybe<RemoveOneMoviePayload>
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  movieUpdateById?: Maybe<UpdateByIdMoviePayload>
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  movieUpdateMany?: Maybe<UpdateManyMoviePayload>
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  movieUpdateOne?: Maybe<UpdateOneMoviePayload>
}

export type MutationCommentCreateManyArgs = {
  records: Array<CreateManyCommentInput>
}

export type MutationCommentCreateOneArgs = {
  record: CreateOneCommentInput
}

export type MutationCommentRemoveByIdArgs = {
  _id: Scalars['MongoID']
}

export type MutationCommentRemoveManyArgs = {
  filter: FilterRemoveManyCommentInput
  limit?: InputMaybe<Scalars['Int']>
}

export type MutationCommentRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneCommentInput>
  sort?: InputMaybe<SortRemoveOneCommentInput>
}

export type MutationCommentUpdateByIdArgs = {
  _id: Scalars['MongoID']
  record: UpdateByIdCommentInput
}

export type MutationCommentUpdateManyArgs = {
  filter?: InputMaybe<FilterUpdateManyCommentInput>
  limit?: InputMaybe<Scalars['Int']>
  record: UpdateManyCommentInput
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SortUpdateManyCommentInput>
}

export type MutationCommentUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneCommentInput>
  record: UpdateOneCommentInput
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SortUpdateOneCommentInput>
}

export type MutationMovieCreateManyArgs = {
  records: Array<CreateManyMovieInput>
}

export type MutationMovieCreateOneArgs = {
  record: CreateOneMovieInput
}

export type MutationMovieRemoveByIdArgs = {
  _id: Scalars['MongoID']
}

export type MutationMovieRemoveManyArgs = {
  filter: FilterRemoveManyMovieInput
  limit?: InputMaybe<Scalars['Int']>
}

export type MutationMovieRemoveOneArgs = {
  filter?: InputMaybe<FilterRemoveOneMovieInput>
  sort?: InputMaybe<SortRemoveOneMovieInput>
}

export type MutationMovieUpdateByIdArgs = {
  _id: Scalars['MongoID']
  record: UpdateByIdMovieInput
}

export type MutationMovieUpdateManyArgs = {
  filter?: InputMaybe<FilterUpdateManyMovieInput>
  limit?: InputMaybe<Scalars['Int']>
  record: UpdateManyMovieInput
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SortUpdateManyMovieInput>
}

export type MutationMovieUpdateOneArgs = {
  filter?: InputMaybe<FilterUpdateOneMovieInput>
  record: UpdateOneMovieInput
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SortUpdateOneMovieInput>
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>
}

export type PaginationInfo = {
  __typename?: 'PaginationInfo'
  currentPage: Scalars['Int']
  hasNextPage?: Maybe<Scalars['Boolean']>
  hasPreviousPage?: Maybe<Scalars['Boolean']>
  itemCount?: Maybe<Scalars['Int']>
  pageCount?: Maybe<Scalars['Int']>
  perPage: Scalars['Int']
}

export type Query = {
  __typename?: 'Query'
  commentById?: Maybe<Comment>
  commentByIds: Array<Comment>
  commentConnection?: Maybe<CommentConnection>
  commentCount?: Maybe<Scalars['Int']>
  commentDataLoader?: Maybe<Comment>
  commentDataLoaderMany: Array<Maybe<Comment>>
  commentMany: Array<Comment>
  commentOne?: Maybe<Comment>
  commentPagination?: Maybe<CommentPagination>
  movieById?: Maybe<Movie>
  movieByIds: Array<Movie>
  movieConnection?: Maybe<MovieConnection>
  movieCount?: Maybe<Scalars['Int']>
  movieDataLoader?: Maybe<Movie>
  movieDataLoaderMany: Array<Maybe<Movie>>
  movieMany: Array<Movie>
  movieOne?: Maybe<Movie>
  moviePagination?: Maybe<MoviePagination>
}

export type QueryCommentByIdArgs = {
  _id: Scalars['MongoID']
}

export type QueryCommentByIdsArgs = {
  _ids: Array<Scalars['MongoID']>
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SortFindByIdsCommentInput>
}

export type QueryCommentConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  filter?: InputMaybe<FilterFindManyCommentInput>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SortConnectionCommentEnum>
}

export type QueryCommentCountArgs = {
  filter?: InputMaybe<FilterCountCommentInput>
}

export type QueryCommentDataLoaderArgs = {
  _id: Scalars['MongoID']
}

export type QueryCommentDataLoaderManyArgs = {
  _ids: Array<Scalars['MongoID']>
}

export type QueryCommentManyArgs = {
  filter?: InputMaybe<FilterFindManyCommentInput>
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SortFindManyCommentInput>
}

export type QueryCommentOneArgs = {
  filter?: InputMaybe<FilterFindOneCommentInput>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SortFindOneCommentInput>
}

export type QueryCommentPaginationArgs = {
  filter?: InputMaybe<FilterFindManyCommentInput>
  page?: InputMaybe<Scalars['Int']>
  perPage?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SortFindManyCommentInput>
}

export type QueryMovieByIdArgs = {
  _id: Scalars['MongoID']
}

export type QueryMovieByIdsArgs = {
  _ids: Array<Scalars['MongoID']>
  limit?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SortFindByIdsMovieInput>
}

export type QueryMovieConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  filter?: InputMaybe<FilterFindManyMovieInput>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SortConnectionMovieEnum>
}

export type QueryMovieCountArgs = {
  filter?: InputMaybe<FilterCountMovieInput>
}

export type QueryMovieDataLoaderArgs = {
  _id: Scalars['MongoID']
}

export type QueryMovieDataLoaderManyArgs = {
  _ids: Array<Scalars['MongoID']>
}

export type QueryMovieManyArgs = {
  filter?: InputMaybe<FilterFindManyMovieInput>
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SortFindManyMovieInput>
}

export type QueryMovieOneArgs = {
  filter?: InputMaybe<FilterFindOneMovieInput>
  skip?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SortFindOneMovieInput>
}

export type QueryMoviePaginationArgs = {
  filter?: InputMaybe<FilterFindManyMovieInput>
  page?: InputMaybe<Scalars['Int']>
  perPage?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SortFindManyMovieInput>
}

export type RemoveByIdCommentPayload = {
  __typename?: 'RemoveByIdCommentPayload'
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>
  /** Removed document */
  record?: Maybe<Comment>
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>
}

export type RemoveByIdMoviePayload = {
  __typename?: 'RemoveByIdMoviePayload'
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>
  /** Removed document */
  record?: Maybe<Movie>
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>
}

export type RemoveManyCommentPayload = {
  __typename?: 'RemoveManyCommentPayload'
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>
}

export type RemoveManyMoviePayload = {
  __typename?: 'RemoveManyMoviePayload'
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>
}

export type RemoveOneCommentPayload = {
  __typename?: 'RemoveOneCommentPayload'
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>
  /** Removed document */
  record?: Maybe<Comment>
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>
}

export type RemoveOneMoviePayload = {
  __typename?: 'RemoveOneMoviePayload'
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>
  /** Removed document */
  record?: Maybe<Movie>
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>
}

export type RuntimeError = ErrorInterface & {
  __typename?: 'RuntimeError'
  /** Runtime error message */
  message?: Maybe<Scalars['String']>
}

export enum SortConnectionCommentEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortConnectionMovieEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindByIdsCommentInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindByIdsMovieInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindManyCommentInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindManyMovieInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindOneCommentInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortFindOneMovieInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortRemoveOneCommentInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortRemoveOneMovieInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortUpdateManyCommentInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortUpdateManyMovieInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortUpdateOneCommentInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export enum SortUpdateOneMovieInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
}

export type UpdateByIdCommentInput = {
  date?: InputMaybe<Scalars['Date']>
  email?: InputMaybe<Scalars['String']>
  movie_id?: InputMaybe<Scalars['MongoID']>
  name?: InputMaybe<Scalars['String']>
  text?: InputMaybe<Scalars['String']>
}

export type UpdateByIdCommentPayload = {
  __typename?: 'UpdateByIdCommentPayload'
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>
  /** Updated document */
  record?: Maybe<Comment>
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>
}

export type UpdateByIdMovieAwardsInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  nominations?: InputMaybe<Scalars['Float']>
  text?: InputMaybe<Scalars['String']>
  wins?: InputMaybe<Scalars['Float']>
}

export type UpdateByIdMovieImdbInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  id?: InputMaybe<Scalars['Float']>
  rating?: InputMaybe<Scalars['Float']>
  votes?: InputMaybe<Scalars['Float']>
}

export type UpdateByIdMovieInput = {
  awards?: InputMaybe<UpdateByIdMovieAwardsInput>
  cast?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  fullplot?: InputMaybe<Scalars['String']>
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  imdb?: InputMaybe<UpdateByIdMovieImdbInput>
  lastupdated?: InputMaybe<Scalars['String']>
  plot?: InputMaybe<Scalars['String']>
  rated?: InputMaybe<Scalars['String']>
  released?: InputMaybe<Scalars['Date']>
  runtime?: InputMaybe<Scalars['Float']>
  title?: InputMaybe<Scalars['String']>
  tomatoes?: InputMaybe<UpdateByIdMovieTomatoesInput>
  type?: InputMaybe<Scalars['String']>
}

export type UpdateByIdMoviePayload = {
  __typename?: 'UpdateByIdMoviePayload'
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>
  /** Updated document */
  record?: Maybe<Movie>
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>
}

export type UpdateByIdMovieTomatoesInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  lastUpdated?: InputMaybe<Scalars['Date']>
  viewer?: InputMaybe<UpdateByIdMovieTomatoesViewerInput>
}

export type UpdateByIdMovieTomatoesViewerInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  meter?: InputMaybe<Scalars['Float']>
  numReviews?: InputMaybe<Scalars['Float']>
  rating?: InputMaybe<Scalars['Float']>
}

export type UpdateManyCommentInput = {
  date?: InputMaybe<Scalars['Date']>
  email?: InputMaybe<Scalars['String']>
  movie_id?: InputMaybe<Scalars['MongoID']>
  name?: InputMaybe<Scalars['String']>
  text?: InputMaybe<Scalars['String']>
}

export type UpdateManyCommentPayload = {
  __typename?: 'UpdateManyCommentPayload'
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>
}

export type UpdateManyMovieAwardsInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  nominations?: InputMaybe<Scalars['Float']>
  text?: InputMaybe<Scalars['String']>
  wins?: InputMaybe<Scalars['Float']>
}

export type UpdateManyMovieImdbInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  id?: InputMaybe<Scalars['Float']>
  rating?: InputMaybe<Scalars['Float']>
  votes?: InputMaybe<Scalars['Float']>
}

export type UpdateManyMovieInput = {
  awards?: InputMaybe<UpdateManyMovieAwardsInput>
  cast?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  fullplot?: InputMaybe<Scalars['String']>
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  imdb?: InputMaybe<UpdateManyMovieImdbInput>
  lastupdated?: InputMaybe<Scalars['String']>
  plot?: InputMaybe<Scalars['String']>
  rated?: InputMaybe<Scalars['String']>
  released?: InputMaybe<Scalars['Date']>
  runtime?: InputMaybe<Scalars['Float']>
  title?: InputMaybe<Scalars['String']>
  tomatoes?: InputMaybe<UpdateManyMovieTomatoesInput>
  type?: InputMaybe<Scalars['String']>
}

export type UpdateManyMoviePayload = {
  __typename?: 'UpdateManyMoviePayload'
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>
}

export type UpdateManyMovieTomatoesInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  lastUpdated?: InputMaybe<Scalars['Date']>
  viewer?: InputMaybe<UpdateManyMovieTomatoesViewerInput>
}

export type UpdateManyMovieTomatoesViewerInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  meter?: InputMaybe<Scalars['Float']>
  numReviews?: InputMaybe<Scalars['Float']>
  rating?: InputMaybe<Scalars['Float']>
}

export type UpdateOneCommentInput = {
  date?: InputMaybe<Scalars['Date']>
  email?: InputMaybe<Scalars['String']>
  movie_id?: InputMaybe<Scalars['MongoID']>
  name?: InputMaybe<Scalars['String']>
  text?: InputMaybe<Scalars['String']>
}

export type UpdateOneCommentPayload = {
  __typename?: 'UpdateOneCommentPayload'
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>
  /** Updated document */
  record?: Maybe<Comment>
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>
}

export type UpdateOneMovieAwardsInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  nominations?: InputMaybe<Scalars['Float']>
  text?: InputMaybe<Scalars['String']>
  wins?: InputMaybe<Scalars['Float']>
}

export type UpdateOneMovieImdbInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  id?: InputMaybe<Scalars['Float']>
  rating?: InputMaybe<Scalars['Float']>
  votes?: InputMaybe<Scalars['Float']>
}

export type UpdateOneMovieInput = {
  awards?: InputMaybe<UpdateOneMovieAwardsInput>
  cast?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  fullplot?: InputMaybe<Scalars['String']>
  genres?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  imdb?: InputMaybe<UpdateOneMovieImdbInput>
  lastupdated?: InputMaybe<Scalars['String']>
  plot?: InputMaybe<Scalars['String']>
  rated?: InputMaybe<Scalars['String']>
  released?: InputMaybe<Scalars['Date']>
  runtime?: InputMaybe<Scalars['Float']>
  title?: InputMaybe<Scalars['String']>
  tomatoes?: InputMaybe<UpdateOneMovieTomatoesInput>
  type?: InputMaybe<Scalars['String']>
}

export type UpdateOneMoviePayload = {
  __typename?: 'UpdateOneMoviePayload'
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>
  /** Updated document */
  record?: Maybe<Movie>
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>
}

export type UpdateOneMovieTomatoesInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  lastUpdated?: InputMaybe<Scalars['Date']>
  viewer?: InputMaybe<UpdateOneMovieTomatoesViewerInput>
}

export type UpdateOneMovieTomatoesViewerInput = {
  _id?: InputMaybe<Scalars['MongoID']>
  meter?: InputMaybe<Scalars['Float']>
  numReviews?: InputMaybe<Scalars['Float']>
  rating?: InputMaybe<Scalars['Float']>
}

export type ValidationError = ErrorInterface & {
  __typename?: 'ValidationError'
  /** List of validator errors */
  errors?: Maybe<Array<ValidatorError>>
  /** Combined error message from all validators */
  message?: Maybe<Scalars['String']>
}

export type ValidatorError = {
  __typename?: 'ValidatorError'
  /** Input record idx in array which occurs the validation error. This `idx` is useful for createMany operation. For singular operations it always be 0. For *Many operations `idx` represents record index in array received from user. */
  idx: Scalars['Int']
  /** Validation error message */
  message?: Maybe<Scalars['String']>
  /** Source of the validation error from the model path */
  path?: Maybe<Scalars['String']>
  /** Field value which occurs the validation error */
  value?: Maybe<Scalars['JSON']>
}
