'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MyPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const anchorPathName = usePathname();
  const isAnchorMenuActive = (path: string) =>
    anchorPathName === path ? 'text-menu-text' : '';

  return (
    <div className="min-w-[1280px]">
      <main className="bg-white grid grid-cols-7 pt-32 pb-32">
        <aside className="col-start-1">
          <nav>
            <ul className="flex flex-col pt-10 pb-10 gap-10 justify-center items-center text-center font-logo font-[600] text-size-2xl  text-button-color">
              <li>
                <Link
                  href=""
                  className={`active:text-menu-text ${isAnchorMenuActive('/')}`}
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
                  href=""
                  className={`active:text-menu-text ${isAnchorMenuActive('')}`}
                >
                  문의내역
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className={`active:text-menu-text ${isAnchorMenuActive('')}`}
                >
                  내리뷰
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className={`active:text-menu-text ${isAnchorMenuActive('')}`}
                >
                  북마크&찜
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <section className="col-start-2 col-end-8 pl-14 border-l-2 border-button-color-opaque-25">
          <h3 className="ml-9 font-logo text-5xl text-button-color">MY PAGE</h3>
          {children}
        </section>
      </main>
    </div>
  );
}
