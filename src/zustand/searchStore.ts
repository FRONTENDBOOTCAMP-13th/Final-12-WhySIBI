import { create } from 'zustand';

interface SearhState {
  searchText: string;
  handleSearchClick: (Text: string) => void;
}

const useSearchStore = create<SearhState>(set => ({
  searchText: '',
  handleSearchClick: (Text: string) => {
    console.log(Text);
    set({
      searchText: Text,
    });
  },
}));

export default useSearchStore;
