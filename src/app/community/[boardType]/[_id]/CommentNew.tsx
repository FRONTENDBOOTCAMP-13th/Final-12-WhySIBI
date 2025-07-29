'use client';
import { createReply } from "@/data/actions/post";
import { useActionState } from "react";

export default function CommentNew({ _id, repliesCount }: { _id: number; repliesCount: number }) {
  const [state, formAction, isLoading] = useActionState(createReply, null);
  return (
    <div>
      <h2 className="font-extrabold text-2xl mx-5 mt-10 mb-5">댓글<span>{repliesCount}</span></h2>
      <div className="border-1 rounded-full h-14 p-4 flex items-center justify-between focus-within:outline-1">
        <form action={formAction} className="flex w-[500px] items-center justify-between">
            <input type="hidden" name="_id" value={_id}></input>
            <div>
              <input type="text" name="content" placeholder="댓글 달기..." className="w-[420px] outline-0 text-sm ml-2"></input>
              <p className="ml-2 mt-1 text-sm text-red-500">
                { state?.ok === 0 && state.errors?.content?.msg }
              </p>
            </div>
          <button type="submit" className="bg-columbia-blue-200 w-15 h-7 font-semibold border-1 rounded-full text-[12px] cursor-pointer ml-3">
            저장
          </button>
        </form>
      </div>
    </div>
  );
}