'use client';
import MenuNavigation from '@/components/_common/Menu_Navigation';
import { logoutAction } from '@/data/actions/user';
import useUserStore from '@/zustand/useUserStore';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function Header() {
  const { user, resetUser } = useUserStore();
  const handleLogout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetUser();
    logoutAction();
    redirect('/');
  };
  return (
    <header className="mt-16 w-full">
      <section className="header_top xl:min-w-[1280px] lg:w-[95%] md:w-[95%] sm:w-[92%] w-[90%] grid grid-cols-3 items-center mx-auto my-0 px-2 sm:px-0">
        <h1 className="col-start-2 flex justify-center">
          <Link href={'/'}>
            <Image
              src={'/image/logo/whysibi_logo.svg'}
              alt="나혼산 로고"
              width="270"
              height="234"
              className="xl:w-[270px] xl:h-[234px] lg:w-[220px] lg:h-auto md:w-[180px] md:h-auto sm:w-[150px] w-[120px] h-auto"
            />
          </Link>
        </h1>
        {user ? (
          <form onSubmit={handleLogout}>
            <div className="col-start-3 logout_button_area flex flex-wrap items-center justify-end gap-1 sm:gap-2 md:gap-3 xl:mr-13 lg:mr-8 md:mr-4 sm:mr-3 mr-2">
              <Image
                src={
                  user.image ? `/${user?.image}` : '/image/image/profile.png'
                }
                width="60"
                height="60"
                alt={`${user.name} 프로필 이미지`}
                className="xl:w-[60px] xl:h-[60px] lg:w-[50px] lg:h-[50px] md:w-[45px] md:h-[45px] sm:w-[38px] sm:h-[38px] w-[32px] h-[32px] object-cover rounded-full sm:mr-2 mr-1"
              />
              <span className="xl:text-base lg:text-sm md:text-sm sm:text-xs text-[10px] whitespace-nowrap hidden sm:inline">
                {user.name}님 :)
              </span>
              <button
                type="submit"
                className="font-basic nahonsan-btn-3d-vanilla xl:p-2 xl:pl-5 xl:pr-5 lg:p-2 lg:pl-4 lg:pr-4 md:p-1.5 md:pl-3 md:pr-3 sm:p-1.5 sm:pl-2 sm:pr-2 p-1 pl-2 pr-2 rounded-radius-md xl:text-size-sm lg:text-sm md:text-xs sm:text-xs text-[10px] whitespace-nowrap"
              >
                <span className="hidden sm:inline">로그아웃</span>
                <span className="sm:hidden">로그아웃</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="col-start-3 login_button_area flex flex-wrap items-center justify-end gap-1 sm:gap-2 md:gap-3 xl:mr-13 lg:mr-8 md:mr-4 sm:mr-3 mr-2">
            <Link
              href={'/login'}
              className="font-basic nahonsan-btn-3d xl:p-2 xl:pl-5 xl:pr-5 lg:p-2 lg:pl-4 lg:pr-4 md:p-1.5 md:pl-3 md:pr-3 sm:p-1.5 sm:pl-2 sm:pr-2 p-1 pl-1.5 pr-1.5 rounded-radius-md xl:text-size-sm lg:text-sm md:text-xs sm:text-xs text-[10px] whitespace-nowrap"
            >
              로그인
            </Link>
            <Link
              href={'/regiester'}
              className="font-basic nahonsan-btn-3d-vanilla xl:p-2 xl:pl-5 xl:pr-5 lg:p-2 lg:pl-4 lg:pr-4 md:p-1.5 md:pl-3 md:pr-3 sm:p-1.5 sm:pl-2 sm:pr-2 p-1 pl-1.5 pr-1.5 rounded-radius-md xl:text-size-sm lg:text-sm md:text-xs sm:text-xs text-[10px] whitespace-nowrap"
            >
              <span className="hidden xs:inline">회원가입</span>
              <span className="xs:hidden">가입</span>
            </Link>
          </div>
        )}
      </section>

      <MenuNavigation />
    </header>
  );
}
