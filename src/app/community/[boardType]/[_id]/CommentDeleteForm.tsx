'use client';

import { deleteReply } from "@/data/actions/post";
import { PostReply } from "@/types";
import { useActionState } from "react";
import { useParams } from "next/navigation";
import useUserStore from "@/zustand/useUserStore";
import { ButtonNostyle } from "@/components/Buttons/Button_nostyle";

export default function CommentDeleteForm({ reply }: { reply: PostReply }) {
  const { type, _id } = useParams();
  const [state, formAction, isLoading] = useActionState(deleteReply, null);
  const { user } = useUserStore();
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) event.preventDefault();
  };
  return (
    <form action={formAction} onSubmit={handleSubmit} className="inline ml-2">
      <input type="hidden" name="type" value={type} />
      <input type="hidden" name="_id" value={_id} />
      <input type="hidden" name="replyId" value={reply._id} />
      <input type="hidden" name="accessToken" value={user?.token?.accessToken ?? ''} />
      <ButtonNostyle type="submit" disabled={isLoading} ownerId={reply.user._id} needLogin>삭제</ButtonNostyle>
      {state?.ok === 0 && <p className="text-red-500 mt-2">{state.message}</p>}
    </form>
  )
}