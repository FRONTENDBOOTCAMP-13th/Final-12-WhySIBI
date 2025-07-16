'use client';
import InputId from '@/components/Input/Input_id';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Register() {
  const [imageSrc, setImageSrc] = useState('');

  const handleFilePath = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('파일 선택 이벤트 발생!');
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      setImageSrc(URL.createObjectURL(file));
    }
  };

  const navigation = useRouter();

  const handleSubmitNavigation = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('type', 'user');
    const result = await fetch('https://fesp-api.koyeb.app/market/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': 'febc13-final12-emjf',
      },
      body: JSON.stringify(formData),
    });
    const nextPage = () => {
      navigation.replace('/my_page/login');
    };
  };

  return (
    <main className="bg-white pb-40">
      <h3 className="font-logo text-5xl text-button-color pt-24 text-center">
        REGISTER
      </h3>
      <div className="border-2 mt-8 m-auto w-[46.25rem] rounded-4xl border-button-color-opaque-25 px-20 py-24">
        <form action="" onSubmit={handleSubmitNavigation}>
          <div className="flex items-center gap-10">
            <Image
              src={imageSrc || '/image/profile.png'}
              alt="프로필 사진"
              width={112}
              height={112}
              className="rounded-[100%] border-2 border-black w-28 h-28 mask-radial-at-center object-cover bg-gray-200"
            />
            <label
              htmlFor="user_profile"
              className="nahonsan-btn-3d-vanilla rounded-full font-basic font-bold bg-vanilla-300  p-2.5 cursor-pointer"
            >
              사진 추가하기
            </label>
            <input
              type="file"
              name="user_profile"
              id="user_profile"
              className="hidden"
              accept="image/*"
              onChange={handleFilePath}
            />
          </div>
          <InputId
            text={'아이디'}
            placeholder={'사용이 가능한 이메일을 입력해주세요'}
            idValue={'email'}
            inputType={'text'}
          />
          <InputId
            text={'닉네임'}
            placeholder={'사용하실 닉네임을 입력해주세요'}
            idValue={'nickname'}
            inputType={'text'}
          />
          <InputId
            text={'이름'}
            placeholder={'성함을 입력해주세요'}
            idValue={'name'}
            inputType={'text'}
          />
          <InputId
            text={'비밀번호'}
            placeholder={'비밀번호를 입력해주세요'}
            idValue={'password'}
            inputType={'password'}
          />
          <InputId
            text={'휴대전화 번호'}
            placeholder={'핸드폰 번호를 -를 제외하고 입력해주세요'}
            idValue={'phone_number'}
            inputType={'text'}
          />
          <InputId
            text={'배송지'}
            placeholder={'상품을 수령할 주소를 입력해주세요'}
            idValue={'address'}
            inputType={'text'}
          />
          <button
            type="submit"
            className="block nahonsan-btn-3d-sky border-button-color mx-auto rounded-radius-full mt-16 py-4 px-8 font-basic tracking-paragraph-default font-bold text-size-md"
          >
            다음페이지
          </button>
        </form>
      </div>
    </main>
  );
}
