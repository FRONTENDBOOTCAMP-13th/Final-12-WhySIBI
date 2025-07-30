import { create } from 'zustand';

interface SearhState {
  text: string;
  handleSearchClick: (Text: string) => void;
}

const useSearchStore = create<SearhState>((set) => ({
  text: '',
  handleSearchClick: Text => {
    console.log(Text);
    set({
      text: Text,
    });
  },
}));

export default useSearchStore;
