import { create } from 'zustand';

interface ProductSearchState {
  searchText: string;
  handleSearchClick: (Text: string) => void;
  resetSearch: () => void;
}

const useProductSearchStore = create<ProductSearchState>(set => ({
  searchText: '',
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
}));

export default useProductSearchStore;
