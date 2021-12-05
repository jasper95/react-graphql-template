import { useCommentsListQuery } from './api/queries'

export default function CommentsList() {
  const { data, isError, isLoading } = useCommentsListQuery()
  if (isLoading) {
    return <span>Loading...</span>
  }
  if (isError) {
    return <span>error.</span>
  }
  return <div>{`Fetched comments count: ${data?.commentMany?.length}`}</div>
}
