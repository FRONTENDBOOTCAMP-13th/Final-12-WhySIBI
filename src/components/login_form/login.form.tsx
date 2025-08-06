// components/LoginForm.tsx
'use client';
import LoginInput from '@/components/Input/Login_input';
import { login } from '@/data/actions/user';
import useUserStore from '@/zustand/useUserStore';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useActionState, useCallback, useEffect } from 'react';
import toast from 'react-hot-toast';

export default function LoginForm() {
  const [userState, formAction] = useActionState(login, null);
  const { setUser } = useUserStore(state => state);
  const navigation = useRouter();

  const showSuccessToast = useCallback((userName: string | undefined) => {
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
                환영합니다{' '}
                <span className="font-bold text-cal-poly-green-100">
                  {userName}
                </span>{' '}
                님.
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

  const showErrorToast = useCallback((errorMessage: string) => {
    toast.custom(
      t => (
        <div
          className={`
          ${t.visible ? 'animate-in slide-in-from-bottom-full' : 'animate-out slide-out-to-bottom-full'}
          max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-red-200 p-4 border-l-4 border-red-500
        `}
          role="alert"
          aria-live="assertive"
          aria-label="로그인 실패 알림"
        >
          <div className="flex">
            {/* 에러 아이콘 */}
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-100">
                <svg
                  className="h-5 w-5 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>

            <div className="ml-3 flex-1">
              <h3 className="text-sm font-medium text-red-800 mb-1">
                로그인 실패
              </h3>
              <p className="text-sm text-red-600">{errorMessage}</p>
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

  console.log(userState);
  useEffect(() => {
    if (userState) {
      if (userState?.ok) {
        setUser({
          _id: userState.item._id,
          email: userState.item.email,
          name: userState.item.name,
          nickname: userState.item.nickname,
          type: userState.item.type,
          image: userState.item.image,
          phone: userState.item.phone,
          token: {
            accessToken: userState.item.token?.accessToken || '',
            refreshToken: userState.item.token?.refreshToken || '',
          },
          extra: {
            addressBook: [
              {
                id: userState.item.extra.addressBook[0].id,
                name: userState.item.extra.addressBook[0].name,
                value: userState.item.extra.addressBook[0].value,
              },
            ],
            preference: userState.item.extra.preference || [],
            birthday: userState.item.extra.birthday,
          },
        });
        showSuccessToast(userState.item.name || '사용자');
        navigation.back();
      } else {
        showErrorToast('아이디, 비밀번호를 다시 확인해주세요.');
      }
    }
  }, [userState, setUser, navigation, showSuccessToast, showErrorToast]);

  return (
    <>
      <Image
        src="/image/logo/footer_logo.svg"
        alt="나혼산 로고"
        width={150}
        height={120}
        className="my-0 mx-auto"
      />
      <form action={formAction} className="w-[95%] md:w-3/4 my-0 mx-auto">
        <LoginInput
          text={''}
          placeholder={'아이디를 입력해주세요'}
          idValue={'email'}
          inputType={'text'}
          defaultValue={'johyunsoo123@market.com'}
        />
        <LoginInput
          text={''}
          placeholder={'비밀번호를 입력해주세요'}
          idValue={'password'}
          inputType={'password'}
          defaultValue={'11111111'}
        />
        <button
          type="submit"
          className="nahonsan-btn-3d bg-button-color rounded-radius-lg w-full mt-16 py-3.5 font-basic tracking-paragraph-default font-bold text-white text-size-md"
        >
          로그인
        </button>
        <Link
          href={'/regiester'}
          className="block text-center nahonsan-btn-3d-white border-button-color border-2 mt-2.5 mb-12 rounded-radius-lg w-full py-3.5 font-basic tracking-paragraph-default font-bold text-button-color text-size-md"
        >
          회원가입
        </Link>
      </form>
    </>
  );
}
