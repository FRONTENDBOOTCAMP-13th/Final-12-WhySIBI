'use client';
import { ButtonNostyle } from "@/components/Buttons/Button_nostyle";
import { deletePost } from "@/data/actions/post";
import useUserStore from "@/zustand/useUserStore";
import { useActionState } from "react";

export default function DeleteForm({ boardType, _id, ownerId }: { boardType: string, _id: number, ownerId: number }) {
  const { user } = useUserStore();
  const [state, formAction, isLoading] = useActionState(deletePost, null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) event.preventDefault();
  };

  return (
    <form action={formAction} onSubmit={handleSubmit}>
      <input type="hidden" name="_id" value={_id} />
      <input type="hidden" name="type" value={boardType} />
      <input type="hidden" name="accessToken" value={user?.token?.accessToken ?? ''} />
      <ButtonNostyle type="submit" disabled={isLoading} ownerId={ownerId} needLogin>삭제</ButtonNostyle>
      {state?.ok === 0 && <p className="text-red-500 mt-2">{state.message}</p>}
    </form>
  );
}