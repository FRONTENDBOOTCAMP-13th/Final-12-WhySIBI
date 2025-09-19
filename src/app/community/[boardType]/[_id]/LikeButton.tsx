'use client';

import { useState } from 'react';
import { usePostLikeStore } from '@/zustand/postLikeStore';
import { setPostLikeServer } from '@/data/actions/likes';

const safeNum = (v: unknown, fallback = 0) =>
  typeof v === 'number' && Number.isFinite(v) ? v : fallback;

export default function LikeButton({
  id,
  boardType,
  initialCount = 0,   // 기본값 0
  initialLiked = false,
  isLoggedIn = false, 
  className = '',
}: {
  id: number | string;
  boardType: string;
  initialCount?: number;
  initialLiked?: boolean;
  isLoggedIn?: boolean;
  className?: string;
}) {
  const key = `${boardType}:${id}`;
  const { likes, liked, toggleLike } = usePostLikeStore();
  const [pending, setPending] = useState(false);

  // 렌더 시에도 가드
  const count = safeNum(likes[key], safeNum(initialCount));
  const isLiked = isLoggedIn ? (key in liked ? liked[key] : initialLiked) : false;


  const onClick = async () => {
    if (pending) return;
    if (!isLoggedIn) {
      alert('로그인이 필요합니다.');
      return;
    }
    setPending(true);

    const want = !isLiked; // 목표 상태
    const res = await setPostLikeServer(id, want);

    if (res?.ok) {
      // 스토어 상태가 목표와 다르면 한 번만 토글해서 맞춤
      const now = key in liked ? liked[key] : initialLiked;
      if (now !== want) toggleLike(key, count);
    } else {
      console.error('좋아요 토글 실패:', JSON.stringify(res));
    }

    setPending(false);
  };

  return (
    <form action={onClick}>
      <button
        type="submit"
        aria-pressed={isLiked}
        disabled={pending}
        className={`cursor-pointer relative items-center justify-center h-9 px-3 mt-0.5 ${className}`} >
        <svg className="w-9 h-9" viewBox="0 0 24 24" fill={isLiked ? '#26422a' : 'none'}>
          <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-.96-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.74-8.84a5.5 5.5 0 0 0 0-7.78Z"
            stroke="#26422a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </form>
  );
}
