// src/app/community/_components/LikeCountBadge.tsx
'use client';
import { usePostLikeStore } from '@/zustand/postLikeStore';

const safeNum = (v: unknown, f = 0) => (typeof v === 'number' && Number.isFinite(v) ? v : f);

export default function LikeCountBadge({
  id,
  boardType,
  initialCount = 0,
  className = '',
}: {
  id: number | string;
  boardType: string;
  initialCount?: number;
  className?: string;
}) {
  const key = `${boardType}:${id}`;
  const { likes } = usePostLikeStore();
  const count = safeNum(likes[key], safeNum(initialCount));

  return (
    <span className={`inline-flex items-center text-xs font-regular text-gray-icon ${className}`}>
      {String(count)}
    </span>
  );
}
