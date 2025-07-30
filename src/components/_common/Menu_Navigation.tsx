'use client';
import Categroy from '@/components/_common/category';
import useMenuStore from '@/zustand/menuStore';
import useUserStore from '@/zustand/useUserStore';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

type SubMenuItem = {
  label: string;
  path: string;
};

function MenuNavigation() {
  const router = useRouter();

  // Zustand store에서 필요한 상태와 함수들 가져오기
  const { activeMenu, subMenuData, handleMenuClick, mainCategoryId } =
    useMenuStore();

  const currentSubMenuItems: SubMenuItem[] =
    activeMenu === 'community'
      ? Object.entries(subMenuData.community.items).map(([label, item]) => ({
          label,
          path: `/community/${item.type}`,
        }))
      : activeMenu === 'shopping'
        ? [
            { label: '추천 상품', path: '/shopping/recommend' },
            { label: '베스트 상품', path: '/shopping/best' },
            { label: '카테고리', path: '/shopping/category' },
          ]
        : [];

  const listPathName = usePathname();
  const isListMenuActive = (path: string) =>
    listPathName === path ? 'bg-white rounded-t-4xl' : '';

  const anchorPathName = usePathname();
  const isAnchorMenuActive = (path: string) =>
    anchorPathName === path ? 'text-menu-text' : '';

  const sub_pathName = usePathname();
  const isSubMenuActive = (path: string) =>
    sub_pathName === path ? 'text-menu-text border-b-4 border-flame-300' : '';

  const { user } = useUserStore();
  const token = user?.token?.accessToken;


  return (
    <>
      <nav className="header_bottom w-full min-w-[1280px] bg-[#D4E8F8] flex flex-wrap justify-between items-center text-center">
        <ul className="font-logo font-bold  text-size-2xl flex flex-wrap items-center ml-16 gap-4">
          <li
            className={`w-[9.375rem] h-[4.375rem] p-3.5 pb-0 mt-3   active:bg-white rounded-t-4xl ${isListMenuActive('/community')}`}
          >
            <Link
              href={`/community/showRoom`}
              className={`block text-button-color w-full h-full active:text-menu-text ${isAnchorMenuActive('/community/showRoom')}`}
              onClick={e => {
                //쇼핑 메뉴 렌더링 순서 보장
                e.preventDefault();
                handleMenuClick('community');
                router.push('/community/showRoom');
              }}
            >
              커뮤니티
            </Link>
          </li>
          <li
            className={`w-[9.375rem] h-[4.375rem] p-3.5 pb-0 mt-3 overflow-hidden  active:bg-white rounded-t-4xl ${isListMenuActive('/shopping/category')} `}
          >
            <Link
              href={'/shopping/category'}
              className={`block text-button-color w-full h-full  active:text-menu-text ${isAnchorMenuActive('/shopping/category')}`}
              onClick={e => {
                //쇼핑 메뉴 렌더링 순서 보장
                e.preventDefault();
                handleMenuClick('shopping', mainCategoryId);
                router.push('/shopping/category');
              }}
            >
              쇼핑
            </Link>
          </li>
          <li
            className={`w-[9.375rem] h-[4.375rem] p-3.5 pb-0 mt-3 overflow-hidden  active:bg-white rounded-t-4xl ${isListMenuActive('/csCenter')} `}
          >
            <Link
              href={''}
              className={`block text-button-color w-full h-full  active:text-menu-text ${isAnchorMenuActive('/csCenter')}`}
              onClick={() => handleMenuClick('csCenter')}
            >
              고객센터
            </Link>
          </li>
          {token ? (
            <li
              className={`w-[9.375rem] h-[4.375rem] p-3.5 pb-0 mt-3 overflow-hidden  active:bg-white rounded-t-4xl ${isListMenuActive('/my_page')} `}
            >
              <Link
                href={'/my_page'}
                className={`block text-button-color w-full h-full  active:text-menu-text ${isAnchorMenuActive('/my_page')}`}
                onClick={() => handleMenuClick('myPage')}
              >
                마이페이지
              </Link>
            </li>
          ) : (
            <li></li>
          )}
        </ul>

        <div className="header_bottom_icons flex flex-wrap  items-center  gap-11 mr-7">
          <div className="search_area h-8">
            <button type="button">
              <Image
                src={'/image/header_icon/search_icon.svg'}
                alt="검색아이콘"
                width={'30'}
                height={'30'}
              ></Image>
            </button>
          </div>
          <Link href={''}>
            <Image
              src={'/image/header_icon/shopping_cart_icon.svg'}
              alt="장바구니아이콘"
              width={'40'}
              height={'40'}
            ></Image>
          </Link>
        </div>
      </nav>
      <section className="sub_menu_nav">
        <ul className="font-basic font-bold bg-white text-size-lg flex flex-wrap items-center pl-16 gap-4 text-center overflow-hidden">
          {currentSubMenuItems?.map((item, index) => (
            <li key={index} className="w-[9.375rem]  ">
              <Link
                href={item.path}
                className={`block text-button-color w-full h-full p-3 active:text-menu-text ${isSubMenuActive(item.path)}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      {sub_pathName === '/shopping/category' && <Categroy />}
    </>
  );
}
export default MenuNavigation;
