'use client';

import { create } from 'zustand';

export type ViewedItem = {
  id: string;
  name: string;
  price: number;
  image?: string;
};

type ViewedStore = {
  viewed: ViewedItem[];
  addViewed: (item: ViewedItem) => void;
  loadViewed: () => void;
};

export const useViewedStore = create<ViewedStore>(set => ({
  viewed: [],

  loadViewed: () => {
    if (typeof window === 'undefined') return;
    const stored = JSON.parse(localStorage.getItem('viewed') || '[]');
    set({ viewed: stored });
  },

  addViewed: (item: ViewedItem) => {
    if (typeof window === 'undefined') return;

    let current: ViewedItem[] = JSON.parse(
      localStorage.getItem('viewed') || '[]',
    );

    // 중복제거
    current = current.filter(v => v.id !== item.id);
    current.unshift(item);

    // 5개까지 보여줌
    if (current.length > 5) current = current.slice(0, 5);

    localStorage.setItem('viewed', JSON.stringify(current));
    set({ viewed: current });
  },
}));
