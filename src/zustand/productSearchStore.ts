import { create } from 'zustand';

interface ProductSearchState {
  searchText: string;
  searchKeywords: string[]; // 비슷한 상품 찾기
  isOpen?: boolean;
  handleSearchClick: (text: string) => void;
  resetSearch: () => void;
  toggleModal: (open: boolean) => void;
  setMultiKeywordSearch: (keywords: string[]) => void; // 비슷한 상품 찾기
  resetKeywords: () => void;
}

const useProductSearchStore = create<ProductSearchState>(set => ({
  searchText: '',
  searchKeywords: [],
  isOpen: false,

  handleSearchClick: (text: string) => {
    // console.log(text);
    set({ searchText: text });
  },

  resetSearch: () => {
    set({ searchText: '', searchKeywords: [] });
  },

  toggleModal: open => set({ isOpen: open }),

  // 비슷한 상품 찾기
  setMultiKeywordSearch: (keywords: string[]) => {
    set({ searchKeywords: keywords });
  },

  resetKeywords: () => set({ searchKeywords: [] }),
}));

export default useProductSearchStore;
