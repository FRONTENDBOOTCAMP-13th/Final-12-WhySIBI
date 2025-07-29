'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function MyPageMenuList() {
  const anchorPathName = usePathname();
  const isAnchorMenuActive = (path: string) =>
    anchorPathName === path ? 'text-menu-text' : '';
  return (
    <nav>
      <ul className="flex flex-col pt-10 pb-10 gap-10 justify-center items-center text-center font-logo font-[600] text-size-2xl  text-button-color">
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
  );
}
