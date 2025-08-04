'use client';
import MenuNavigation from '@/components/_common/Menu_Navigation';
import { logoutAction } from '@/data/actions/user';
import useUserStore from '@/zustand/useUserStore';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Header() {
  const { user, resetUser } = useUserStore();
  const handleLogout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetUser();
    logoutAction();
    redirect('/');
  };
  return (
    <header className="mt-16 min-w-[1280px]">
      <section className="header_top max-w-[98%]  grid grid-cols-3 items-center mx-auto my-0">
        <h1 className="col-start-2 flex justify-center">
          <Link href={'/'}>
            <Image
              src={'/image/logo/whysibi_logo.svg'}
              alt="나혼산 로고"
              width="270"
              height="234"
            />
          </Link>
        </h1>
        {user ? (
          <form onSubmit={handleLogout}>
            <p className="col-start-3 logout_button_area flex flex-wrap items-center justify-end gap-3 mr-13">
              <Image
                className="object-cover rounded-full mr-2"
                src={
                  user.image
                    ? `${API_URL}/${user?.image}`
                    : '/image/image/profile.png'
                }
                width="60"
                height="60"
                alt={`${user.name} 프로필 이미지`}
              />
              {user.name}님 :)
              <button
                type="submit"
                className="font-basic nahonsan-btn-3d-vanilla p-2 pl-5 pr-5 rounded-radius-md text-size-sm"
              >
                로그아웃
              </button>
            </p>
          </form>
        ) : (
          <div className="col-start-3 login_button_area flex flex-wrap items-center justify-end gap-3 mr-13">
            <Link
              href={'/login'}
              className="font-basic nahonsan-btn-3d  p-2 pl-5 pr-5 rounded-radius-md text-size-sm"
            >
              로그인
            </Link>
            <Link
              href={'/regiester'}
              className="font-basic nahonsan-btn-3d-vanilla  p-2 pl-5 pr-5 rounded-radius-md text-size-sm"
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
