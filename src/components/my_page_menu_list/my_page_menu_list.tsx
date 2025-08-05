'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
export default function MyPageMenuList() {
  const anchorPathName = usePathname();
  const isAnchorMenuActive = (path: string) =>
    anchorPathName === path ? 'text-menu-text' : '';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <nav className="hidden md:block">
        <ul className=" flex flex-col xl:pt-10 xl:pb-10 lg:pt-8 lg:pb-8 md:pt-6 md:pb-6 pt-4 pb-4 xl:gap-10 lg:gap-8 md:gap-6 gap-6 justify-center items-center text-center font-logo font-[600] xl:text-size-2xl lg:text-xl md:text-lg text-base text-button-color">
          <li>
            <Link
              href="/my_page/edit_info"
              className={`active:text-menu-text ${isAnchorMenuActive('/my_page/edit_info')}`}
            >
              내정보 수정
            </Link>
          </li>
          <li>
            <Link
              href="/my_page"
              className={`active:text-menu-text ${isAnchorMenuActive('/my_page')}`}
            >
              주문조회
            </Link>
          </li>
          <li>
            <Link
              href="/my_page/my_inqury"
              className={`active:text-menu-text ${isAnchorMenuActive('/my_page/my_inqury')}`}
            >
              문의내역
            </Link>
          </li>
          <li>
            <Link
              href="/my_page/reviews"
              className={`active:text-menu-text ${isAnchorMenuActive('/my_page/reviews')}`}
            >
              내리뷰
            </Link>
          </li>
          <li>
            <Link
              href="/my_page/bookmarks"
              className={`active:text-menu-text ${isAnchorMenuActive('/my_page/bookmarks')}`}
            >
              북마크&찜
            </Link>
          </li>
        </ul>
      </nav>

      <div
        className="md:hidden text-center nahonsan-btn-3d-white py-2 rounded-2xl mb-6 border-1 border-button-color-opaque-25"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        마이페이지 메뉴
      </div>
      {isMobileMenuOpen && (
        <nav>
          <ul className="md:hidden flex flex-col xl:pt-10 xl:pb-10 lg:pt-8 lg:pb-8 md:pt-6 md:pb-6 pt-4 pb-4 xl:gap-10 lg:gap-8 md:gap-6 gap-6 justify-center items-center text-center font-logo font-[600] xl:text-size-2xl lg:text-xl md:text-lg text-base text-button-color">
            <li>
              <Link
                href="/my_page/edit_info"
                className={`active:text-menu-text ${isAnchorMenuActive('/my_page/edit_info')}`}
              >
                내정보 수정
              </Link>
            </li>
            <li>
              <Link
                href="/my_page"
                className={`active:text-menu-text ${isAnchorMenuActive('/my_page')}`}
              >
                주문조회
              </Link>
            </li>
            <li>
              <Link
                href="/my_page/my_inqury"
                className={`active:text-menu-text ${isAnchorMenuActive('/my_page/my_inqury')}`}
              >
                문의내역
              </Link>
            </li>
            <li>
              <Link
                href="/my_page/reviews"
                className={`active:text-menu-text ${isAnchorMenuActive('/my_page/reviews')}`}
              >
                내리뷰
              </Link>
            </li>
            <li>
              <Link
                href="/my_page/bookmarks"
                className={`active:text-menu-text ${isAnchorMenuActive('/my_page/bookmarks')}`}
              >
                북마크&찜
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
