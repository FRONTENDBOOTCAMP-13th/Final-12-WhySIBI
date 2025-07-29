import { create } from 'zustand';

interface Subject {
  id: string;
  label: string;
}

interface MenuState {
  activeSubject: string;
  handleMenuClick: (Subject: string) => void;
}

const useSubjectStore = create<MenuState>((set, get) => ({
  activeSubject: 'all',
  handleMenuClick: subject => {
    console.log(subject);
    set({
      activeSubject: subject,
    });
  },
}));

export default useSubjectStore;
