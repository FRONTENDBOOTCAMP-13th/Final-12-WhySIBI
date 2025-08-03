import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface RecommendStore {
  recommendations: Record<string, number>; // reviewId: count
  recommended: Record<string, boolean>; // reviewId: isRecommended
  toggleRecommend: (reviewId: string, initialCount: number) => void;
}

export const useRecommendStore = create<RecommendStore>()(
  persist(
    (set, get) => ({
      recommendations: {},
      recommended: {},

      toggleRecommend: (reviewId: string, initialCount: number) => {
        const { recommendations, recommended } = get();
        const currentCount = recommendations[reviewId] ?? initialCount;
        const isRecommended = recommended[reviewId] ?? false;

        set({
          recommendations: {
            ...recommendations,
            [reviewId]: isRecommended ? currentCount - 1 : currentCount + 1,
          },
          recommended: {
            ...recommended,
            [reviewId]: !isRecommended,
          },
        });
      },
    }),
    { name: 'reviews' },
  ),
);
