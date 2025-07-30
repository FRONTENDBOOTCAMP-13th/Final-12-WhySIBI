import { create } from 'zustand';


interface MenuState {
  activeSubject: string;
  handleMenuClick: (Subject: string) => void;
}

const useSubjectStore = create<MenuState>((set) => ({
  activeSubject: 'all',
  handleMenuClick: subject => {
    console.log(subject);
    set({
      activeSubject: subject,
    });
  },
}));

export default useSubjectStore;
