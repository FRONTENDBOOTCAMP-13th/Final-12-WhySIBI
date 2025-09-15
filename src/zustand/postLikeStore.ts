// src/zustand/postLikeStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const safeNum = (v: unknown, fallback = 0) =>
  typeof v === 'number' && Number.isFinite(v) ? v : fallback;

interface PostLikeStore {
  likes: Record<string, number>;      // postId -> count
  liked: Record<string, boolean>;     // postId -> isLiked
  toggleLike: (postId: string, initialCount?: number) => void;
}

export const usePostLikeStore = create<PostLikeStore>()(
  persist(
    (set, get) => ({
      likes: {},
      liked: {},
      toggleLike: (postId, initialCount = 0) => {
        const { likes, liked } = get();

        const base = likes[postId];
        const current = safeNum(base, safeNum(initialCount, 0)); // ✅ 둘 다 가드
        const isLiked = !!liked[postId];

        const next = isLiked ? Math.max(0, current - 1) : current + 1;

        set({
          likes: { ...likes, [postId]: next },
          liked: { ...liked, [postId]: !isLiked },
        });
      },
    }),
    {
      name: 'postLikes',
      version: 1,
      // ✅ 이미 저장된 NaN을 0으로 정리 (마이그레이션)
      migrate: (state: any) => {
        if (!state || !state.state) return state;
        const likes = state.state.likes || {};
        const cleaned: Record<string, number> = {};
        for (const k of Object.keys(likes)) {
          cleaned[k] = typeof likes[k] === 'number' && Number.isFinite(likes[k]) ? likes[k] : 0;
        }
        return { ...state, state: { ...state.state, likes: cleaned } };
      },
    },
  ),
);
