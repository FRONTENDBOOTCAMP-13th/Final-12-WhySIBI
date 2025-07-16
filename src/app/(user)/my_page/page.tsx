import Link from 'next/link';

export default function myPage() {
  return (
    <main className="bg-white grid grid-cols-5">
      <aside className="col-start-1">
        <nav>
          <ul className="flex flex-col gap-10 justify-center items-center text-center font-logo text-size-xl  text-button-color border-r-1">
            <li>
              <Link href="" className="active:text-menu-text">
                내정보 수정
              </Link>
            </li>
            <li>
              <Link href="" className="active:text-menu-text">
                주문조회
              </Link>
            </li>
            <li>
              <Link href="" className="active:text-menu-text">
                문의내역
              </Link>
            </li>
            <li>
              <Link href="" className="active:text-menu-text">
                내리뷰
              </Link>
            </li>
            <li>
              <Link href="" className="active:text-menu-text">
                북마크&찜
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <section className="col-start-2">
        <h3 className="font-logo text-5xl text-button-color">MY PAGE</h3>
      </section>
    </main>
  );
}
