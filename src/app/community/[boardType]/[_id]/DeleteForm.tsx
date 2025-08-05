'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ButtonNostyle } from "@/components/Buttons/Button_nostyle";
import { deletePost } from "@/data/actions/post";
import useUserStore from "@/zustand/useUserStore";
import { useActionState } from "react";

export default function DeleteForm({ boardType, _id, ownerId }: { boardType: string, _id: number, ownerId: number }) {
  const { user } = useUserStore();
  const [state, formAction, isLoading] = useActionState(deletePost, null);
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (!window.confirm("정말 삭제하시겠습니까?")) 
      event.preventDefault();
  };

    useEffect(() => {
    if (state?.ok === 1) {
      sessionStorage.setItem("post_success_toast", "게시글이 삭제되었습니다!");
      router.push(`/community/${boardType}`);
    }
  }, [state, router, boardType]);

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