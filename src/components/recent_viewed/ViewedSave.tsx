'use client';

import { useViewedStore, ViewedItem } from '@/zustand/viewedStore';
import { useEffect } from 'react';

type Props = {
  id: string;
  name: string;
  price: number;
  image?: string;
};

export default function ViewedSave({ id, name, price, image }: Props) {
  const addViewed = useViewedStore(state => state.addViewed);

  useEffect(() => {
    if (id && name) {
      const item: ViewedItem = { id, name, price, image };
      addViewed(item);
    }
  }, [id, name, price, image, addViewed]);

  return null;
}
