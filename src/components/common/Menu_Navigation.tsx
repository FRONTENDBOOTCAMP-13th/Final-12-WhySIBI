import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
interface activeMenuProps {
  커뮤니티: string[];
  쇼핑: string[];
}
const subMenuData: activeMenuProps = {
  커뮤니티: ['집들이', '자취 상담소'],
  쇼핑: ['추천상품', '베스트 상품', '카테고리'],
};
function MenuNavigation() {
  const [activeMenu, setactiveMenu] = useState(''); // 현재 활성화된 메뉴
  const [subMenuName, setsubMenuName] = useState(false); // 서브메뉴 표시 여부
  const handleMenu = (menuName: string) => {
    console.log(`${menuName}이 클릭되었습니다.`);
    setactiveMenu(menuName);
    setsubMenuName(true);
  };

  return (
    <>
      <nav className="header_bottom bg-[#D4E8F8] flex flex-wrap justify-between items-center text-center">
        <ul className="font-logo text-size-2xl flex flex-wrap items-center ml-16 gap-4">
          <li className="w-[9.375rem] h-[4.375rem] p-3.5 pb-0 mt-3   active:bg-white rounded-t-4xl">
            <Link
              href={''}
              className="block text-button-color  active:text-menu-text w-full h-full"
              onClick={() => handleMenu('커뮤니티')}
            >
              커뮤니티
            </Link>
          </li>
          <li className="w-[9.375rem] h-[4.375rem] p-3.5 pb-0 mt-3   active:bg-white rounded-t-4xl">
            <Link
              href={''}
              className="block text-button-color active:text-menu-text w-full h-full"
              onClick={() => handleMenu('쇼핑')}
            >
              쇼핑
            </Link>
          </li>
          <li className="w-[9.375rem] h-[4.375rem] p-3.5 pb-0 mt-3 overflow-hidden  active:bg-white rounded-t-4xl">
            <Link
              href={''}
              className="block text-button-color active:text-menu-text w-full h-full"
              onClick={() => handleMenu('고객센터')}
            >
              고객센터
            </Link>
          </li>
          <li className="w-[9.375rem] h-[4.375rem] p-3.5 pb-0 mt-3 overflow-hidden  active:bg-white rounded-t-4xl">
            <Link
              href={''}
              className="block text-button-color active:text-menu-text  w-full h-full"
              onClick={() => handleMenu('마이페이지')}
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
        <ul className="font-basic bg-white text-size-lg flex flex-wrap items-center pl-16 gap-4 text-center overflow-hidden">
          {subMenuData[activeMenu]?.map((item, index) => (
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
export default React.memo(MenuNavigation);
