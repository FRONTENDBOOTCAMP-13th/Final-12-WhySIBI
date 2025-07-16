import { create } from 'zustand';

interface activeMenuProps {
  [key: string]: string[];
}

interface MenuState {
  activeMenu: string;
  subMenuData: activeMenuProps;
  handleMenuClick: (menuName: string) => void;
}

const useMenuStore = create<MenuState>(set => ({
  activeMenu: '',
  subMenuData: {
    community: ['집들이', '자취 상담소'],
    shopping: ['추천 상품', '베스트 상품', '카테고리'],
  },
  handleMenuClick: menuName => {
    console.log(`${menuName}이 클릭되었습니다.`);
    set({
      activeMenu: menuName,
    });
  },
}));

export default useMenuStore;
