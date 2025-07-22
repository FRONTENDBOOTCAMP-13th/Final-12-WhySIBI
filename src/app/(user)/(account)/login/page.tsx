'use client';
import InputId from '@/components/Input/Input_id';
import { login } from '@/data/actions/user';
import useUserStore from '@/zustand/useUserStore';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';

export default function Login() {
  const [userState, formAction] = useActionState(login, null);
  const { setUser } = useUserStore(state => state);
  const navigation = useRouter();
  useEffect(() => {
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
        },
      });
      alert('로그인이 완료되었습니다.');
      navigation.replace('/');
    } else {
      if (!userState?.errors && userState?.message) {
        alert(userState.message); // 로그인 실패 메세지
      }
    }
  }, [userState]);
  return (
    <>
      <h3 className="font-logo text-5xl text-button-color pt-24 text-center">
        LOGIN
      </h3>
      <div className="border-2 mt-8 m-auto w-[46.25rem] rounded-4xl border-button-color-opaque-25 px-20 py-24">
        <Image
          src="/image/logo/footer_logo.svg"
          alt="나혼산 로고"
          width={150}
          height={120}
          className="my-0 mx-auto"
        />
        <form
          action={formAction}
          className="w-3/4 my-0 mx-auto border-b-2 border-button-color-opaque-25"
        >
          <InputId
            text={''}
            placeholder={'아이디를 입력해주세요'}
            idValue={'email'}
            inputType={'text'}
          />
          <InputId
            text={''}
            placeholder={'비밀번호를 입력해주세요'}
            idValue={'password'}
            inputType={'password'}
          />
          <button
            type="submit"
            className="nahonsan-btn-3d bg-button-color rounded-radius-lg w-full mt-16 py-3.5 font-basic tracking-paragraph-default font-bold text-white text-size-md"
          >
            로그인
          </button>
          <Link
            href={'/my_page/regiester'}
            className="block text-center nahonsan-btn-3d-white border-button-color border-2 mt-2.5 mb-12 rounded-radius-lg w-full py-3.5 font-basic tracking-paragraph-default font-bold text-button-color text-size-md"
          >
            회원가입
          </Link>
        </form>
        <aside className="w-3/4 my-0 mx-auto">
          <p className="font-logo text-3xl text-button-color pt-8 text-center">
            SNS 로그인
          </p>
          <button
            type="submit"
            className="bg-button-color rounded-radius-lg w-full mt-6 py-3.5 font-basic tracking-paragraph-default font-bold text-white text-size-md"
          >
            로그인
          </button>
          <button
            type="button"
            className="border-button-color border-2 mt-2.5 mb-12 rounded-radius-lg w-full py-3.5 font-basic tracking-paragraph-default font-bold text-button-color text-size-md"
          >
            회원가입
          </button>
        </aside>
      </div>
    </>
  );
}
