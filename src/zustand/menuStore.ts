import { create } from 'zustand';

interface SubCategory {
  id: string;
  label: string;
}

interface MainCategory {
  id: string;
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
      [mainCategoryId: string]: MainCategory;
    };
  };
}

interface CommunityItems {
  집들이: {
    type: 'showRoom';
  };
  '자취 상담소': {
    type: 'talk';
  };
}

interface SubMenuData {
  community: {
    type: 'community';
    items: CommunityItems;
  };
  shopping: {
    type: 'shopping';
    items: ShoppingItems;
  };
}

interface MenuState {
  activeMenu: string;
  mainCategoryId: string;
  subCategoryId: string | null;
  subMenuData: SubMenuData;
  handleMenuClick: (menuName: string, mainId?: string, subId?: string) => void;
}

const useMenuStore = create<MenuState>(set => ({
  activeMenu: '',
  mainCategoryId: 'PC0301', //기본값ID ('여름나기 용품')
  subCategoryId: null,

  subMenuData: {
    community: {
      type: 'community',
      items: {
        집들이: {
          type: 'showRoom',
        },
        '자취 상담소': {
          type: 'talk',
        },
      },
    },

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
            PC0301: {
              id: 'PC0301',
              label: '여름나기 용품',
              subCategory: [
                { id: 'PC030101', label: '장마 대비' },
                { id: 'PC030102', label: '무더위 대비' },
              ],
            },
            PC0302: {
              id: 'PC0302',
              label: '가구',
              subCategory: [
                { id: 'PC030201', label: '소파 / 의자' },
                { id: 'PC030202', label: '매트리스 / 토퍼' },
                { id: 'PC030203', label: '밥상 / 테이블 / 협탁' },
              ],
            },
            PC0303: {
              id: 'PC0303',
              label: '생활용품',
              subCategory: [
                { id: 'PC030301', label: '청소 / 설거지' },
                { id: 'PC030302', label: '주방용품' },
                { id: 'PC030303', label: '욕실용품' },
                { id: 'PC030304', label: '생필품' },
              ],
            },
            PC0304: {
              id: 'PC0304',
              label: '소품·데코',
              subCategory: [
                { id: 'PC030401', label: '디퓨저 / 캔들 / 인센스' },
                { id: 'PC030402', label: '인테리어 소품' },
                { id: 'PC030403', label: '식물 / 조화' },
                { id: 'PC030404', label: '시계 / 데스크테리어' },
              ],
            },
            PC0305: {
              id: 'PC0305',
              label: '가전·디지털',
              subCategory: [
                { id: 'PC030501', label: '청소가전' },
                { id: 'PC030502', label: '휴대폰 / 태블릿PC' },
                { id: 'PC030503', label: '생활 / 욕실가전' },
                { id: 'PC030504', label: '미용가전' },
                { id: 'PC030505', label: '주방가전' },
                { id: 'PC030506', label: '영상 / 음향가전' },
              ],
            },
            PC0306: {
              id: 'PC0306',
              label: '공구·DIY',
              subCategory: [
                { id: 'PC030601', label: '벽지 / 바닥 / 시트' },
                { id: 'PC030602', label: '공구 / 부자재 / 기타' },
                { id: 'PC030603', label: '안전 / 방범 / 방한' },
              ],
            },
            PC0307: {
              id: 'PC0307',
              label: '수납·정리',
              subCategory: [
                { id: 'PC030701', label: '서랍장 / 수납장' },
                { id: 'PC030702', label: '가벽 / 파티션' },
                { id: 'PC030703', label: '선반 / 책장 / 장식장' },
                { id: 'PC030704', label: '행거 / 옷장 / 신발장' },
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
