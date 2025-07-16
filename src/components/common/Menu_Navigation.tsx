'use client';
import useMenuStore from '@/zustand/menuStore';
import Image from 'next/image';
import Link from 'next/link';

function MenuNavigation() {
  // Zustand store에서 필요한 상태와 함수들 가져오기
  const { activeMenu, subMenuData, handleMenuClick } = useMenuStore();

  const currentSubMenuItems = subMenuData[activeMenu] || [];

  return (
    <>
      <nav className="header_bottom bg-[#D4E8F8] flex flex-wrap justify-between items-center text-center">
        <ul className="font-logo text-size-2xl flex flex-wrap items-center ml-16 gap-4">
          <li className="w-[9.375rem] h-[4.375rem] p-3.5 pb-0 mt-3   active:bg-white rounded-t-4xl">
            <Link
              href={''}
              className="block text-button-color  active:text-menu-text w-full h-full"
              onClick={() => handleMenuClick('community')}
            >
              커뮤니티
            </Link>
          </li>
          <li className="w-[9.375rem] h-[4.375rem] p-3.5 pb-0 mt-3   active:bg-white rounded-t-4xl">
            <Link
              href={''}
              className="block text-button-color active:text-menu-text w-full h-full"
              onClick={() => handleMenuClick('shopping')}
            >
              쇼핑
            </Link>
          </li>
          <li className="w-[9.375rem] h-[4.375rem] p-3.5 pb-0 mt-3 overflow-hidden  active:bg-white rounded-t-4xl">
            <Link
              href={''}
              className="block text-button-color active:text-menu-text w-full h-full"
              onClick={() => handleMenuClick('csCenter')}
            >
              고객센터
            </Link>
          </li>
          <li className="w-[9.375rem] h-[4.375rem] p-3.5 pb-0 mt-3 overflow-hidden  active:bg-white rounded-t-4xl">
            <Link
              href={'/my_page'}
              className="block text-button-color active:text-menu-text  w-full h-full"
              onClick={() => handleMenuClick('myPage')}
            >
              마이페이지
            </Link>
          </li>
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
        <ul className="font-basic  bg-white text-size-lg flex flex-wrap items-center pl-16 gap-4 text-center overflow-hidden">
          {currentSubMenuItems?.map((item: string, index: number) => (
            <li key={index} className="w-[9.375rem] ">
              <Link
                href=""
                className="block text-button-color active:text-menu-text w-full h-full"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
export default MenuNavigation;
