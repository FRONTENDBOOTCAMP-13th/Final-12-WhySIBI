import { create } from 'zustand';

interface MenuState {
  activeMenu: string;
  subMenuName: boolean;
  handleMenuClick: (menuName: string) => void;
}

const useMenuStore = create<MenuState>(set => ({
  activeMenu: '',
  subMenuName: false,
  handleMenuClick: menuName => {
    console.log(`${menuName}이 클릭되었습니다.`);
    set({
      activeMenu: menuName,
      subMenuName: true,
    });
  },
}));
export default useMenuStore;
