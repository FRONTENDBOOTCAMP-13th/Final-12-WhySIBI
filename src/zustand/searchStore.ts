import { create } from 'zustand';

interface SearhState {
  searchText: string;
  handleSearchClick: (Text: string) => void;
  resetSearch: () => void;
}

const useSearchStore = create<SearhState>(set => ({
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

export default useSearchStore;
