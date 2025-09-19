import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const safeNum = (v: unknown, fallback = 0) =>
  typeof v === 'number' && Number.isFinite(v) ? v : fallback;

interface PostLikeStore {
  likes: Record<string, number>;      // postId -> count
  liked: Record<string, boolean>;     // postId -> isLiked
  toggleLike: (postId: string, initialCount?: number) => void;
}

interface PersistedState<T> {
  version: number;
  state: T;
}

export const usePostLikeStore = create<PostLikeStore>()(
  persist(
    (set, get) => ({
      likes: {},
      liked: {},
      toggleLike: (postId, initialCount = 0) => {
        const { likes, liked } = get();

        const base = likes[postId];
        const current = safeNum(base, safeNum(initialCount, 0)); // 둘 다 가드
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
      migrate: (persistedState: unknown): PersistedState<PostLikeStore> | undefined => {
        // unknown → 안전하게 체크 후 캐스팅
        if (
          !persistedState ||
          typeof persistedState !== 'object' ||
          !('state' in persistedState)
        ) {
          return persistedState as PersistedState<PostLikeStore> | undefined;
        }

        const ps = persistedState as PersistedState<PostLikeStore>;
        const likes = ps.state.likes || {};
        const cleaned: Record<string, number> = {};

        for (const k of Object.keys(likes)) {
          cleaned[k] =
            typeof likes[k] === 'number' && Number.isFinite(likes[k]) ? likes[k] : 0;
        }

        return { ...ps, state: { ...ps.state, likes: cleaned } };
      },
    },
  ),
);
