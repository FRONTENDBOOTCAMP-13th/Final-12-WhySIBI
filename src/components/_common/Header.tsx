'use client';
import MenuNavigation from '@/components/_common/Menu_Navigation';
import { logoutAction } from '@/data/actions/user';
import useUserStore from '@/zustand/useUserStore';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import toast from 'react-hot-toast';

export default function Header() {
  const { user, resetUser } = useUserStore();
  const router = useRouter();
  const showSuccessToast = useCallback(() => {
    toast.custom(
      t => (
        <div
          className={`
          ${t.visible ? 'animate-in slide-in-from-bottom-full' : 'animate-out slide-out-to-bottom-full'}
          max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-gray-200 p-4 border-l-4 border-cal-poly-green-100
        `}
        >
          <div className="flex">
            {/* 체크 아이콘 */}
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-cal-poly-green-100">
                <svg
                  className="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            <div className="ml-3 flex-1 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900 mb-1">
                로그아웃 되었습니다.
              </p>
            </div>
          </div>
        </div>
      ),
      {
        duration: 5000,
        position: 'top-center',
      },
    );
  }, []);

  const handleLogout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetUser();
    logoutAction();
    showSuccessToast();
    router.refresh();
  };

  return (
    <header className="pt-16 w-full vertical-stripes">
      <div className="max-w-[1280px] mx-auto">
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
              <div className="col-start-3 logout_button_area flex items-center justify-end gap-1 sm:gap-2 md:gap-3 xl:mr-13 lg:mr-8 md:mr-4 sm:mr-3 mr-1">
                <Link href={'/my_page'} className="flex items-center">
                  <Image
                    src={user.image ? user?.image : '/image/profile.png'}
                    width="60"
                    height="60"
                    alt={`${user.name} 프로필 이미지`}
                    className="xl:w-[60px] xl:h-[60px] lg:w-[50px] lg:h-[50px] md:w-[40px] md:h-[40px] sm:w-[32px] sm:h-[32px] w-[28px] h-[28px] object-cover rounded-full"
                  />
                  <span className="xl:text-base lg:text-sm md:text-sm text-xs whitespace-nowrap hidden md:inline max-w-[80px] lg:max-w-none truncate">
                    {user.name}님
                  </span>
                </Link>
                <button
                  type="submit"
                  className="font-basic nahonsan-btn-3d-vanilla xl:p-2 xl:pl-5 xl:pr-5 lg:p-2 lg:pl-4 lg:pr-4 md:p-1.5 md:pl-3 md:pr-3 p-1 pl-2 pr-2 rounded-radius-md xl:text-size-sm lg:text-sm md:text-xs text-[9px] whitespace-nowrap min-w-0"
                >
                  <span className="hidden md:inline">로그아웃</span>
                  <span className="md:hidden">로그아웃</span>
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
                <span className="xs:hidden">회원가입</span>
              </Link>
            </div>
          )}
        </section>
      </div>
      <MenuNavigation />
    </header>
  );
}
