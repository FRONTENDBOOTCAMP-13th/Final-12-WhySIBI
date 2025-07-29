'use client';

import { deleteReply } from "@/data/actions/post";
import { PostReply } from "@/types";
import { useActionState } from "react";
import { useParams } from "next/navigation";

export default function CommentDeleteForm({ reply }: { reply: PostReply }) {
  const { type, _id } = useParams();
  const [state, formAction, isLoading] = useActionState(deleteReply, null);
  console.log(state, isLoading);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) event.preventDefault();
  };
  return (
    <form action={formAction} onSubmit={handleSubmit} className="inline ml-2">
      <input type="hidden" name="type" value={type} />
      <input type="hidden" name="_id" value={_id} />
      <input type="hidden" name="replyId" value={reply._id} />
      <button type="submit"  className="hover:underline">삭제</button>
    </form>
  )
}