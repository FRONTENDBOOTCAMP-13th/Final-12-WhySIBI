import { create } from 'zustand';

interface SearhState {
  searchText: string;
  handleSearchClick: (Text: string) => void;
  resetSearch: () => void;
}

const useSearchStore = create<SearhState>(set => ({
  searchText: ''.toLowerCase(),
  handleSearchClick: (Text: string) => {
    set({
      searchText: Text.toLowerCase(),
    });
  },
  resetSearch: () => {
    set({
      searchText: '',
    });
  },
}));

export default useSearchStore;
