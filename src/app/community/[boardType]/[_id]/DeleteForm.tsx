'use client';
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ButtonNostyle } from "@/components/Buttons/Button_nostyle";
import { deletePost } from "@/data/actions/post";
import useUserStore from "@/zustand/useUserStore";
import { useActionState } from "react";
import toast from "react-hot-toast";

export default function DeleteForm({ boardType, _id, ownerId }: { boardType: string, _id: number, ownerId: number }) {
  const { user } = useUserStore();
  const [state, formAction, isLoading] = useActionState(deletePost, null);
  const router = useRouter();
  const [isConfirmOpen, setIsConfirmOpen] = useState(false); // 게시글 등록 확인 모달

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setIsConfirmOpen(true);
  };

  useEffect(() => {
    if (state?.ok === 1) {
      router.replace(`/community/${boardType}?deleted=1`);
    }

    if (state?.ok === 0) {
      toast.error(state.message ?? "게시글 삭제 실패", { position: "top-center" });
    }
  }, [state, router, boardType]);

  return (
    <form action={formAction} onSubmit={handleSubmit}>
      <input type="hidden" name="_id" value={_id} />
      <input type="hidden" name="type" value={boardType} />
      <input type="hidden" name="accessToken" value={user?.token?.accessToken ?? ''} />
      <ButtonNostyle type="submit" disabled={isLoading} ownerId={ownerId} needLogin>삭제</ButtonNostyle>
      {isConfirmOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50" onClick={() => setIsConfirmOpen(false)}>
          <div className="bg-white rounded-3xl shadow-lg p-8 w-[400px] modal-bounce" onClick={(e) => e.stopPropagation()}>
            <p className="flex justify-center text-lg font-semibold text-gray-800 mb-6">
              게시글을 삭제하시겠습니까?
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => {
                  setIsConfirmOpen(false);
                  if (formRef.current) formRef.current.requestSubmit();
                }}
                className="px-5 py-3 bg-livealone-flame text-white rounded-full hover:shadow-lg hover:duration-300"
              >
                확인
              </button>
              <button
                onClick={() => setIsConfirmOpen(false)}
                className="px-5 py-3 bg-livealone-vanilla text-livealone-flame rounded-full hover:shadow-lg hover:duration-300"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
      {state?.ok === 0 && <p className="text-red-500 mt-2">{state.message}</p>}
    </form>
  );
}