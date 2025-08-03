import { create } from 'zustand';

interface ProductSearchState {
  searchText: string;
  handleSearchClick: (Text: string) => void;
  resetSearch: () => void;
  isOpen?: boolean;
  toggleModal: (open: boolean) => void;
}

const useProductSearchStore = create<ProductSearchState>(set => ({
  searchText: '',
  isOpen: false,
  handleSearchClick: (Text: string) => {
    console.log(Text);
    set({
      searchText: Text,
    });
  },
  resetSearch: () => {
    set({
      searchText: '',
    });
  },
  toggleModal: open => set({ isOpen: open }),
}));

export default useProductSearchStore;
