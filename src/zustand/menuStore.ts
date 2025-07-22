import { create } from 'zustand';

interface SubCategory {
  id: number;
  label: string;
}

interface MainCategory {
  id: number;
  label: string;
  subCategory: SubCategory[];
}

interface ShoppingItems {
  '추천 상품': {
    type: 'recommend';
  };
  '베스트 상품': {
    type: 'best';
  };
  카테고리: {
    type: 'category';
    items: {
      [mainCategoryId: number]: MainCategory;
    };
  };
}

interface SubMenuData {
  community: {
    type: 'community';
    items: string[];
  };
  shopping: {
    type: 'shopping';
    items: ShoppingItems;
  };
}

interface MenuState {
  activeMenu: string;
  mainCategoryId: number;
  subCategoryId: number | null;
  subMenuData: SubMenuData;
  handleMenuClick: (menuName: string, mainId?: number, subId?: number) => void;
}

const useMenuStore = create<MenuState>(set => ({
  activeMenu: '',
  mainCategoryId: 500, //기본값ID
  subCategoryId: null,

  subMenuData: {
    community: { type: 'community', items: ['집들이', '자취 상담소'] },
    shopping: {
      type: 'shopping',
      items: {
        '추천 상품': {
          type: 'recommend',
        },
        '베스트 상품': {
          type: 'best',
        },
        카테고리: {
          type: 'category',
          items: {
            100: {
              id: 100,
              label: '여름나기 용품',
              subCategory: [
                { id: 101, label: '장마 대비' },
                { id: 102, label: '무더위 대비' },
              ],
            },
            200: {
              id: 200,
              label: '가구',
              subCategory: [
                { id: 201, label: '소파 / 의자' },
                { id: 202, label: '매트리스 / 토퍼' },
                { id: 203, label: '밥상 / 테이블 / 협탁' },
              ],
            },
            300: {
              id: 300,
              label: '생활용품',
              subCategory: [
                { id: 301, label: '청소 / 설거지' },
                { id: 302, label: '주방용품' },
                { id: 303, label: '욕실용품' },
                { id: 304, label: '생필품' },
              ],
            },
            400: {
              id: 400,
              label: '소품·데코',
              subCategory: [
                { id: 401, label: '디퓨저 / 캔들 / 인센스' },
                { id: 402, label: '인테리어 소품' },
                { id: 403, label: '식물 / 조화' },
                { id: 404, label: '시계 / 데스크테리어' },
              ],
            },
            500: {
              id: 500,
              label: '가전·디지털',
              subCategory: [
                { id: 501, label: '청소가전' },
                { id: 502, label: '휴대폰 / 태블릿PC' },
                { id: 503, label: '생활 / 욕실가전' },
                { id: 504, label: '미용가전' },
                { id: 505, label: '주방가전' },
                { id: 506, label: '영상 / 음향가전' },
              ],
            },
            600: {
              id: 600,
              label: '공구·DIY',
              subCategory: [
                { id: 601, label: '벽지 / 바닥 / 시트' },
                { id: 602, label: '공구 / 부자재 / 기타' },
                { id: 603, label: '안전 / 방범 / 방한' },
              ],
            },
            700: {
              id: 700,
              label: '수납·정리',
              subCategory: [
                { id: 601, label: '서랍장 / 수납장' },
                { id: 602, label: '가벽 / 파티션' },
                { id: 603, label: '선반 / 책장 / 장식장' },
                { id: 604, label: '행거 / 옷장 / 신발장' },
              ],
            },
          },
        },
      },
    },
  },
  handleMenuClick: (menuName, mainId, subId) => {
    console.log(`${menuName},${mainId},${subId}이 클릭되었습니다.`);
    set({
      activeMenu: menuName,
      mainCategoryId: mainId,
      subCategoryId: subId || null,
    });
  },
}));

export default useMenuStore;
