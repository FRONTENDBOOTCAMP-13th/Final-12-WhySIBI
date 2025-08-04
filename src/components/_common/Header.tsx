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
      <section className="header_top xl:min-w-[1280px] lg:w-[95%] md:w-[95%] w-[90%] grid grid-cols-3 items-center mx-auto my-0">
        <h1 className="col-start-2 flex justify-center">
          <Link href={'/'}>
            <Image
              src={'/image/logo/whysibi_logo.svg'}
              alt="나혼산 로고"
              width="270"
              height="234"
              className="xl:w-[270px] xl:h-[234px] lg:w-[220px] lg:h-auto md:w-[180px] md:h-auto h-auto"
            />
          </Link>
        </h1>
        {user ? (
          <form onSubmit={handleLogout}>
            <p className="col-start-3 logout_button_area flex flex-wrap items-center justify-end gap-3 xl:mr-13 lg:mr-8 md:mr-4 mr-2">
              <Image
                src={
                  user.image ? `/${user?.image}` : '/image/image/profile.png'
                }
                width="60"
                height="60"
                alt={`${user.name} 프로필 이미지`}
                className="xl:w-[60px] xl:h-[60px] lg:w-[50px] lg:h-[50px] md:w-[45px] md:h-[45px] w-[40px] h-[40px] object-cover rounded-full mr-2"
              />
              <span className="xl:text-base lg:text-sm md:text-sm text-xs whitespace-nowrap">
                {user.name}님 :)
              </span>
              <button
                type="submit"
                className="font-basic nahonsan-btn-3d-vanilla xl:p-2 xl:pl-5 xl:pr-5 lg:p-2 lg:pl-4 lg:pr-4 md:p-1.5 md:pl-3 md:pr-3 p-1.5 pl-2 pr-2 rounded-radius-md xl:text-size-sm lg:text-sm md:text-xs text-xs whitespace-nowrap"
              >
                로그아웃
              </button>
            </p>
          </form>
        ) : (
          <div className="col-start-3 login_button_area flex flex-wrap items-center justify-end gap-3 xl:mr-13 lg:mr-8 md:mr-4 mr-2">
            <Link
              href={'/login'}
              className="font-basic nahonsan-btn-3d xl:p-2 xl:pl-5 xl:pr-5 lg:p-2 lg:pl-4 lg:pr-4 md:p-1.5 md:pl-3 md:pr-3 p-1.5 pl-2 pr-2 rounded-radius-md xl:text-size-sm lg:text-sm md:text-xs text-xs whitespace-nowrap"
            >
              로그인
            </Link>
            <Link
              href={'/register'}
              className="font-basic nahonsan-btn-3d-vanilla xl:p-2 xl:pl-5 xl:pr-5 lg:p-2 lg:pl-4 lg:pr-4 md:p-1.5 md:pl-3 md:pr-3 p-1.5 pl-2 pr-2 rounded-radius-md xl:text-size-sm lg:text-sm md:text-xs text-xs whitespace-nowrap"
            >
              회원가입
            </Link>
          </div>
        )}
      </section>

      <MenuNavigation />
    </header>
  );
}
