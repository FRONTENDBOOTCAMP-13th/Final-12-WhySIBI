import { create } from 'zustand';

interface SubMenuItem {
  label: string;
  path: string;
}

interface SubMenuData {
  [key: string]: SubMenuItem[];
}

interface MenuState {
  activeMenu: string;
  subMenuData: SubMenuData;
  handleMenuClick: (menuName: string) => void;
}

const useMenuStore = create<MenuState>(set => ({
  activeMenu: '',
  subMenuData: {
    community: [
      { label: '집들이', path: '/community/a' },
      { label: '자취 상담소', path: '/community/b' },
    ],
    shopping: [
      { label: '추천 상품', path: '/shopping/c' },
      { label: '베스트 상품', path: '/shopping/d' },
      { label: '카테고리', path: '/my_page/login' },
    ],
  },
  handleMenuClick: menuName => {
    console.log(`${menuName}이 클릭되었습니다.`);
    set({
      activeMenu: menuName,
    });
  },
}));

export default useMenuStore;
