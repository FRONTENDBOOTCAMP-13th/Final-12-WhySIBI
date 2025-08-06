'use client';
import Categroy from '@/components/_common/category';
import ProductSearchButton from '@/components/product_search/product_search_button';
import useMenuStore from '@/zustand/menuStore';
import useUserStore from '@/zustand/useUserStore';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

type SubMenuItem = {
  label: string;
  path: string;
};

function MenuNavigation() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Zustand store에서 필요한 상태와 함수들 가져오기
  const { activeMenu, subMenuData, handleMenuClick, mainCategoryId } = useMenuStore();
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

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
    listPathName.includes(path) ? 'bg-white rounded-t-4xl' : '';

  const anchorPathName = usePathname();
  const isAnchorMenuActive = (path: string) =>
    anchorPathName.includes(path) ? 'text-menu-text' : '';

  const sub_pathName = usePathname();
  const isSubMenuActive = (path: string) =>
    sub_pathName === path ? 'text-menu-text border-b-4 border-flame-300' : '';

  const { user } = useUserStore();
  const token = user?.token?.accessToken;

  useEffect(() => {
    if (pathname === '/' || (!pathname.startsWith('/community') && !pathname.startsWith('/shopping'))) {
      handleMenuClick('');
    }
  }, [pathname, handleMenuClick]);

  return (
    <>
      {/* 데스크톱/태블릿 네비게이션 (768px 이상) */}
      <div className="w-full bg-[#D4E8F8]">
        <div className="max-w-[1280px] mx-auto">
          <nav className="header_bottom xl:min-w-[1280px] lg:w-[95%] md:w-[95%] w-[90%] mx-auto md:flex hidden flex-wrap justify-between items-center text-center">
            <ul className="font-logo font-bold xl:text-size-2xl lg:text-xl md:text-lg flex flex-wrap items-center xl:ml-16 lg:ml-12 md:ml-8 xl:gap-4 lg:gap-3 md:gap-2">
              <li
                className={`xl:w-[9.375rem] lg:w-[8rem] md:w-[7rem] xl:h-[4.375rem] lg:h-[4rem] md:h-[3.5rem] xl:p-3.5 lg:p-3 md:p-2.5 pb-0 mt-3 active:bg-white rounded-t-4xl ${isListMenuActive('/community')}`}
              >
                <Link
                  href={`/community/showRoom`}
                  className={`block text-button-color w-full h-full active:text-menu-text ${isAnchorMenuActive('/community')}`}
                  onClick={e => {
                    e.preventDefault();
                    handleMenuClick('community');
                    router.push('/community/showRoom');
                  }}
                >
                  커뮤니티
                </Link>
              </li>
              <li
                className={`xl:w-[9.375rem] lg:w-[8rem] md:w-[7rem] xl:h-[4.375rem] lg:h-[4rem] md:h-[3.5rem] xl:p-3.5 lg:p-3 md:p-2.5 pb-0 mt-3 overflow-hidden active:bg-white rounded-t-4xl ${isListMenuActive('/shopping')}`}
              >
                <Link
                  href={'/shopping/category'}
                  className={`block text-button-color w-full h-full active:text-menu-text ${isAnchorMenuActive('/shopping')}`}
                  onClick={e => {
                    e.preventDefault();
                    handleMenuClick('shopping', mainCategoryId);
                    router.push('/shopping/category');
                  }}
                >
                  쇼핑
                </Link>
              </li>
              <li
                className={`xl:w-[9.375rem] lg:w-[8rem] md:w-[7rem] xl:h-[4.375rem] lg:h-[4rem] md:h-[3.5rem] xl:p-3.5 lg:p-3 md:p-2.5 pb-0 mt-3 overflow-hidden active:bg-white rounded-t-4xl ${isListMenuActive('/service')}`}
              >
                <Link
                  href={'/service'}
                  className={`block text-button-color w-full h-full active:text-menu-text ${isAnchorMenuActive('/service')}`}
                  onClick={() => handleMenuClick('service')}
                >
                  고객센터
                </Link>
              </li>
              {token ? (
                <li
                  className={`xl:w-[9.375rem] lg:w-[8rem] md:w-[7rem] xl:h-[4.375rem] lg:h-[4rem] md:h-[3.5rem] xl:p-3.5 lg:p-3 md:p-2.5 pb-0 mt-3 overflow-hidden active:bg-white rounded-t-4xl ${isListMenuActive('/my_page')}`}
                >
                  <Link
                    href={'/my_page'}
                    className={`block text-button-color w-full h-full active:text-menu-text ${isAnchorMenuActive('/my_page')}`}
                    onClick={() => handleMenuClick('myPage')}
                  >
                    마이페이지
                  </Link>
                </li>
              ) : (
                <li></li>
              )}
            </ul>

            <div className="header_bottom_icons flex flex-wrap items-center xl:gap-11 lg:gap-8 md:gap-6 xl:mr-7 lg:mr-5 md:mr-4">
              <ProductSearchButton />
              <Link href={'/cart'}>
                <Image
                  src={'/image/header_icon/shopping_cart_icon.svg'}
                  alt="장바구니아이콘"
                  width={'40'}
                  height={'40'}
                  className="xl:w-[40px] xl:h-[40px] lg:w-[35px] lg:h-[35px] md:w-[32px] md:h-[32px]"
                />
              </Link>
            </div>
          </nav>
        </div>

        {/* 모바일 네비게이션 (768px 미만) */}
        <nav className="header_bottom w-full bg-[#D4E8F8] md:hidden flex justify-between items-center px-4 py-2">
          {/* 햄버거 메뉴 버튼 */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
            aria-label="메뉴 열기"
          >
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            ></span>
          </button>

          {/* 모바일 아이콘들 */}
          <div className="flex items-center gap-4">
            <ProductSearchButton />
            <Link href={'/cart'}>
              <Image
                src={'/image/header_icon/shopping_cart_icon.svg'}
                alt="장바구니아이콘"
                width={'32'}
                height={'32'}
              />
            </Link>
          </div>
        </nav>
        {/* 모바일 드롭다운 메뉴 */}
        {isMobileMenuOpen && (
          <div className="md:hidden font-logo text-lg bg-[#D4E8F8] border-t border-gray-200 shadow-lg">
            <ul className="py-2">
              <li>
                <div>
                  <button
                    className={`flex justify-between items-center w-full px-4 py-3 text-gray-800 hover:bg-gray-100 border-b border-gray-100 ${isAnchorMenuActive('/community')}`}
                    onClick={() => {
                      if (expandedMenu === 'community') {
                        setExpandedMenu(null);
                      } else {
                        setExpandedMenu('community');
                        handleMenuClick('community');
                      }
                    }}
                  >
                    <span>커뮤니티</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${expandedMenu === 'community' ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* 커뮤니티 서브메뉴 */}
                  {expandedMenu === 'community' && (
                    <div className="bg-gray-50 border-l-4 border-blue-300">
                      <ul className="py-1">
                        <li>
                          <Link
                            href="/community/showRoom"
                            className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => {
                              router.push('/community/showRoom');
                              setIsMobileMenuOpen(false);
                              setExpandedMenu(null);
                            }}
                          >
                            집들이
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/community/talk"
                            className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => {
                              router.push('/community/talk');
                              setIsMobileMenuOpen(false);
                              setExpandedMenu(null);
                            }}
                          >
                            자취 상담소
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>

              <li>
                <div>
                  <button
                    className={`flex justify-between items-center w-full px-4 py-3 text-gray-800 hover:bg-gray-100 border-b border-gray-100 ${isAnchorMenuActive('/shopping')}`}
                    onClick={() => {
                      if (expandedMenu === 'shopping') {
                        setExpandedMenu(null);
                      } else {
                        setExpandedMenu('shopping');
                        handleMenuClick('shopping', mainCategoryId);
                      }
                    }}
                  >
                    <span>쇼핑</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${expandedMenu === 'shopping' ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* 쇼핑 서브메뉴 */}
                  {expandedMenu === 'shopping' && (
                    <div className="bg-gray-50 border-l-4 border-green-300">
                      <ul className="py-1">
                        <li>
                          <Link
                            href="/shopping/recommend"
                            className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => {
                              router.push('/shopping/recommend');
                              setIsMobileMenuOpen(false);
                              setExpandedMenu(null);
                            }}
                          >
                            추천 상품
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/shopping/best"
                            className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => {
                              router.push('/shopping/best');
                              setIsMobileMenuOpen(false);
                              setExpandedMenu(null);
                            }}
                          >
                            인기 상품
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/shopping/category"
                            className="block px-8 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => {
                              router.push('/shopping/category');
                              setIsMobileMenuOpen(false);
                              setExpandedMenu(null);
                            }}
                          >
                            카테고리별 상품
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </li>

              <li>
                <Link
                  href={'/service'}
                  className={`block px-4 py-3 text-gray-800 hover:bg-gray-100 border-b border-gray-100 ${isAnchorMenuActive('/service')}`}
                  onClick={() => {
                    handleMenuClick('service');
                    setIsMobileMenuOpen(false);
                    setExpandedMenu(null);
                  }}
                >
                  고객센터
                </Link>
              </li>

              {token && (
                <li>
                  <Link
                    href={'/my_page'}
                    className={`block px-4 py-3 text-gray-800 hover:bg-gray-100 border-b border-gray-100 ${isAnchorMenuActive('/my_page')}`}
                    onClick={() => {
                      handleMenuClick('myPage');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    마이페이지
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}

        {/* 서브메뉴 (데스크톱/태블릿만) */}
        <div className="sub_menu_nav md:block hidden bg-white">
          <div className="max-w-[1280px] mx-auto">
            <div className="xl:min-w-[1280px] lg:w-[95%] md:w-[95%] w-[90%] mx-auto">
              <ul className="font-basic font-bold xl:text-size-lg lg:text-base md:text-sm flex flex-wrap items-center xl:pl-16 lg:pl-12 md:pl-8 xl:gap-4 lg:gap-3 md:gap-2 text-center overflow-hidden">
                {currentSubMenuItems?.map((item, index) => (
                  <li
                    key={index}
                    className="xl:w-[9.375rem] lg:w-[8rem] md:w-[7rem]"
                  >
                    <Link
                      href={item.path}
                      className={`block text-button-color w-full h-full xl:p-3 lg:p-2.5 md:p-2 active:text-menu-text ${isSubMenuActive(item.path)}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {pathname === '/shopping/category' && <Categroy />}
    </>
  );
}
export default MenuNavigation;
