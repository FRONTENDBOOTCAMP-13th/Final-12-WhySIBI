'use client';

import { useViewedStore } from '@/zustand/viewedStore';
import { useEffect } from 'react';

export default function ViewedInitPage() {
  const loadViewed = useViewedStore(state => state.loadViewed);

  //localStorage 'viewed' 값 초기화
  useEffect(() => {
    if (!localStorage.getItem('viewed')) {
      localStorage.setItem('viewed', JSON.stringify([]));
    }

    loadViewed();
  }, [loadViewed]);

  return null;
}
