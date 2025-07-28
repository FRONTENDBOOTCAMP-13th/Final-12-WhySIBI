import CommentItem from "./CommentItem"
import { getReplies } from "@/data/functions/post"
import { PostReply } from "@/types"

export default async function CommentList({ _id }: { _id: number }){
  const res = await getReplies(_id);

  return(
    <>
    { res.ok ? 
      res.item.map((reply: PostReply) => (
        <CommentItem key={reply._id} reply={reply} />
      )) : 
      <p>{ res.message }</p>
    }
    </>
  )
}