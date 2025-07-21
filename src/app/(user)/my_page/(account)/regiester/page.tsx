'use client';
import InputId from '@/components/Input/Input_id';
import { createUser } from '@/data/actions/user';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useState } from 'react';

export default function Register() {
  //이미지 주소 추출
  const [imageSrc, setImageSrc] = useState('');
  const handleFilePath = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('파일 선택 이벤트 발생!');
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      setImageSrc(URL.createObjectURL(file));
    }
  };
  //회원가입
  const [state, formAction, isLoading] = useActionState(createUser, null);
  const navigation = useRouter();
  useEffect(() => {
    if (state?.ok) {
      alert('회원 가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
      navigation.replace('/my_page');
    } else if (state?.ok === 0 && !state?.errors) {
      // 입력값 검증에러가 아닌 경우
      alert(state?.message);
    }
  }, [state]);

  const currentYear = new Date().getFullYear();
  //Array.from({length:?})를 통해서 length의값만큼의 길이를 가진 빈배열로 만들고
  //(_,i)=> 함수를 통해 각 인덱스의 값을 채운다.
  const years = Array.from(
    { length: currentYear - 1950 },
    (_, i) => currentYear - i,
  );
  const month = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <main className="bg-white pb-40">
      <h3 className="font-logo text-5xl text-button-color pt-24 text-center">
        REGISTER
      </h3>
      <div className="border-2 mt-8 m-auto w-[46.25rem] rounded-4xl border-button-color-opaque-25 px-20 py-24">
        <form action={formAction}>
          <div className="flex items-center gap-10">
            <Image
              src={imageSrc || '/image/profile.png'}
              alt="프로필 사진"
              width={112}
              height={112}
              className="rounded-[100%] border-2 border-black w-28 h-28 mask-radial-at-center object-cover bg-gray-200"
            />
            <label
              htmlFor="attach"
              className="nahonsan-btn-3d-vanilla rounded-full font-basic font-bold bg-vanilla-300  p-2.5 cursor-pointer"
            >
              사진 추가하기
            </label>
            <input
              type="file"
              name="attach"
              id="attach"
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
          <div className="w-full font-basic mt-9">
            <p className=" font-bold pl-4 ">생년월일</p>
            <div className=" flex gap-4 h-10">
              <select
                name="birth_year"
                id="birth_year"
                className="font-basic block w-28 pl-4 border-2 outline-0  border-button-color-opaque-25 rounded-3xl  py-1  focus:border-button-color transition-all duration-200 ease-in"
              >
                <option value="">연도 선택</option>
                {years.map(year => (
                  <option key={year} value={year}>
                    {year}년
                  </option>
                ))}
              </select>
              <select
                name="birth_month"
                id="birth_month"
                className="font-basic block w-28 pl-4 border-2 outline-0  border-button-color-opaque-25 rounded-3xl  py-1  focus:border-button-color transition-all duration-200 ease-in"
              >
                <option value="">월 선택</option>
                {month.map(month => (
                  <option key={month} value={month.toString().padStart(2, '0')}>
                    {month}월
                  </option>
                ))}
              </select>
              <select
                name="birth_day"
                id="birth_day"
                className="font-basic block w-28 pl-4 border-2 outline-0  border-button-color-opaque-25 rounded-3xl  py-1  focus:border-button-color transition-all duration-200 ease-in"
              >
                <option value="">일 선택</option>
                {days.map(day => (
                  <option key={day} value={day.toString().padStart(2, '0')}>
                    {day}일
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* <InputId
            text={'배송지 이름'}
            placeholder={''}
            idValue={'address_name'}
            inputType={'text'}
          /> */}
          <select
            name="address_name"
            id="address_name"
            className="mt-9 mb-[-30px] font-basic block w-28 pl-4 border-2 outline-0  border-button-color-opaque-25 rounded-3xl  py-1  focus:border-button-color transition-all duration-200 ease-in"
            defaultValue="집"
          >
            <option value="home">집</option>
            <option value="workSpace">직장</option>
          </select>
          <InputId
            text={'배송지'}
            placeholder={'상품을 수령할 주소를 입력해주세요'}
            idValue={'address_value'}
            inputType={'text'}
          />

          {!isLoading && (
            <button
              type="submit"
              className="block nahonsan-btn-3d-sky border-button-color mx-auto rounded-radius-full mt-16 py-4 px-8 font-basic tracking-paragraph-default font-bold text-size-md"
            >
              다음페이지
            </button>
          )}
        </form>
      </div>
    </main>
  );
}
