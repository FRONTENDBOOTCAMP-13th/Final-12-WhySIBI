import MenuNavigation from '@/components/common/Menu_Navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="mt-16">
      <section className="header_top max-w-[98%] grid grid-cols-3 items-center mx-auto my-0">
        <h1 className="col-start-2 flex justify-center">
          <Image
            src={'/image/logo/whysibi_logo.svg'}
            alt="나혼산 로고"
            width="270"
            height="234"
          />
        </h1>
        <div className="col-start-3 login_button_area flex flex-wrap items-center justify-end gap-3 mr-13">
          <Link
            href={''}
            className="bg-button-color text-white p-2 pl-5 pr-5 rounded-radius-md text-size-sm"
          >
            로그인
          </Link>
          <Link
            href={''}
            className="bg-vanilla-300 text-button-color p-2 pl-5 pr-5 rounded-radius-md text-size-sm"
          >
            회원가입
          </Link>
        </div>
      </section>

      <MenuNavigation />
    </header>
  );
}
