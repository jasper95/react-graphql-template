import * as Types from '@/shared/generated/graphql.types'

import { useQuery, UseQueryOptions } from 'react-query'
import { fetcher } from '@/shared/fetcher'
export type CommentsListQueryVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.FilterFindManyCommentInput>
  skip?: Types.InputMaybe<Types.Scalars['Int']>
  sort?: Types.InputMaybe<Types.SortFindManyCommentInput>
}>

export type CommentsListQuery = {
  __typename?: 'Query'
  commentMany: Array<{
    __typename?: 'Comment'
    email?: string | null | undefined
    movie_id?: any | null | undefined
    text?: string | null | undefined
    _id: any
  }>
}

export const CommentsListDocument = `
    query CommentsList($filter: FilterFindManyCommentInput, $skip: Int, $sort: SortFindManyCommentInput) {
  commentMany(filter: $filter, skip: $skip, sort: $sort) {
    email
    movie_id
    text
    _id
  }
}
    `
export const useCommentsListQuery = <
  TData = CommentsListQuery,
  TError = unknown
>(
  variables?: CommentsListQueryVariables,
  options?: UseQueryOptions<CommentsListQuery, TError, TData>
) =>
  useQuery<CommentsListQuery, TError, TData>(
    variables === undefined ? ['CommentsList'] : ['CommentsList', variables],
    fetcher<CommentsListQuery, CommentsListQueryVariables>(
      CommentsListDocument
    ).bind(null, variables),
    options
  )
