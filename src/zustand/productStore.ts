'use client';

import { create } from 'zustand';
import { ProductListProps } from '@/types';

type ProductStore = {
  products: ProductListProps[];
  setProducts: (data: ProductListProps[]) => void;
};

export const useProductStore = create<ProductStore>(set => ({
  products: [],
  setProducts: data => set({ products: data }),
}));
