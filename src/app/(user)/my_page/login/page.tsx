import InputId from '@/components/Input/Input_id';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  return (
    <main className="bg-white pb-40">
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
          action=""
          className="w-3/4 my-0 mx-auto border-b-2 border-button-color-opaque-25"
        >
          <InputId
            text={''}
            placeholder={'아이디를 입력해주세요'}
            idValue={'user_id'}
            inputType={'text'}
          />
          <InputId
            text={''}
            placeholder={'비밀번호를 입력해주세요'}
            idValue={'user_pw'}
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
    </main>
  );
}
