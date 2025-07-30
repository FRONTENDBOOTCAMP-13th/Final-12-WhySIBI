import { create } from 'zustand';

interface MenuState {
  activeSubject: string;
  handleMenuClick: (Subject: string) => void;
  resetSubject: () => void;
}

const useSubjectStore = create<MenuState>(set => ({
  activeSubject: 'all',
  handleMenuClick: subject => {
    set({
      activeSubject: subject,
    });
  },
  resetSubject: () => {
    set({
      activeSubject: '',
    });
  },
}));

export default useSubjectStore;
