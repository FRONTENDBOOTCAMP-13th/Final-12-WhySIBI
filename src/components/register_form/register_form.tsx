'use client';
import MyTheme from '@/components/my_theme/page';
import InputId from '@/components/Input/Input_id';
import { createUser } from '@/data/actions/user';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useActionState, useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function RegisterForm() {
  // 이미지 주소 추출
  const [imageSrc, setImageSrc] = useState('');
  const handleFilePath = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      setImageSrc(URL.createObjectURL(file));
    }
  };

  // 취향 선택 컴포넌트 렌더링
  const [isClick, setIsClick] = useState(false);

  // 회원가입
  const [state, formAction, isLoading] = useActionState(createUser, null);
  const navigation = useRouter();

  const showSuccessToast = useCallback(() => {
    toast.custom(
      t => (
        <div
          className={`
          ${t.visible ? 'animate-in slide-in-from-bottom-full' : 'animate-out slide-out-to-bottom-full'}
          max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-gray-200 p-4
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
                회원가입 되었습니다.
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

  useEffect(() => {
    if (state?.ok) {
      showSuccessToast();
      navigation.push('/login');
    }
  }, [state, navigation, showSuccessToast]);

  // 생년월일 옵션 생성
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1950 },
    (_, i) => currentYear - i,
  );
  const month = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <form action={formAction}>
      <input type="hidden" name="type" value="user" />

      <div className={isClick ? 'hidden' : 'block'}>
        {/* 프로필 이미지 섹션 */}
        <div className="flex items-center gap-10 mb-8">
          <Image
            src={imageSrc || '/image/profile.png'}
            alt="프로필 사진"
            width={112}
            height={112}
            className="rounded-[100%] border-2 border-black w-28 h-28 mask-radial-at-center object-cover bg-gray-200"
          />
          <label
            htmlFor="attach"
            className="nahonsan-btn-3d-vanilla rounded-full font-basic font-bold bg-vanilla-300 p-2.5 cursor-pointer"
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

        {/* 기본 정보 입력 필드들 */}
        <InputId
          text={'아이디'}
          placeholder={'사용이 가능한 이메일을 입력해주세요'}
          idValue={'email'}
          inputType={'text'}
        />
        <p
          className={`font-basic ml-2 mt-1 text-sm ${
            state?.ok === 0 && state.errors?.email?.msg
              ? 'text-red-500 dark:text-red-400'
              : 'text-gray-500'
          }`}
        >
          {(state?.ok === 0 && state.errors?.email?.msg) ||
            '이메일을 형식에 맞게 입력해주세요'}
        </p>

        <InputId
          text={'닉네임'}
          placeholder={'사용하실 닉네임을 입력해주세요'}
          idValue={'nickname'}
          inputType={'text'}
        />
        <p
          className={`font-basic ml-2 mt-1 text-sm ${
            state?.ok === 0 && state.errors?.nickname?.msg
              ? 'text-red-500 dark:text-red-400'
              : 'text-gray-500'
          }`}
        >
          {(state?.ok === 0 && state.errors?.nickname?.msg) ||
            '첫 공백을 제외하고 입력해주세요'}
        </p>

        <InputId
          text={'이름'}
          placeholder={'성함을 입력해주세요'}
          idValue={'name'}
          inputType={'text'}
        />
        <p
          className={`font-basic ml-2 mt-1 text-sm ${
            state?.ok === 0 && state.errors?.name?.msg
              ? 'text-red-500 dark:text-red-400'
              : 'text-gray-500'
          }`}
        >
          {(state?.ok === 0 && state.errors?.email?.msg) ||
            '공백없이 입력해주세요'}
        </p>
        <InputId
          text={'비밀번호'}
          placeholder={'비밀번호를 입력해주세요'}
          idValue={'password'}
          inputType={'password'}
        />
        <p
          className={`font-basic ml-2 mt-1 text-sm ${
            state?.ok === 0 && state.errors?.password?.msg
              ? 'text-red-500 dark:text-red-400'
              : 'text-gray-500'
          }`}
        >
          {(state?.ok === 0 && state.errors?.password?.msg) ||
            '비밀번호는 최소 4자리 이상이여야합니다'}
        </p>

        <InputId
          text={'휴대전화 번호'}
          placeholder={'핸드폰 번호를 -를 제외하고 입력해주세요'}
          idValue={'phone_number'}
          inputType={'text'}
        />
        <p
          className={`font-basic ml-2 mt-1 text-sm ${
            state?.ok === 0 && state.errors?.phone?.msg
              ? 'text-red-500 dark:text-red-400'
              : 'text-gray-500'
          }`}
        >
          {(state?.ok === 0 && state.errors?.phone?.msg) ||
            '010-xxxx-xxxx가 아닌 -를 제외한 숫자를 입력해주세요'}
        </p>
        {/* 생년월일 선택 */}
        <div className="w-full font-basic mt-9">
          <p className="font-bold pl-4">생년월일</p>
          <div className="flex flex-col md:flex-row gap-4 h-10">
            <select
              name="birth_year"
              id="birth_year"
              className="font-basic block w-28 pl-4 border-2 outline-0 border-button-color-opaque-25 rounded-3xl py-1 focus:border-button-color transition-all duration-200 ease-in"
              required
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
              className="font-basic block w-28 pl-4 border-2 outline-0 border-button-color-opaque-25 rounded-3xl py-1 focus:border-button-color transition-all duration-200 ease-in"
              required
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
              className="font-basic block w-28 pl-4 border-2 outline-0 border-button-color-opaque-25 rounded-3xl py-1 focus:border-button-color transition-all duration-200 ease-in"
              required
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

        {/* 배송지 정보 */}
        <select
          name="address_name"
          id="address_name"
          className="mt-28 md:mt-9 mb-[-30px] font-basic block w-28 pl-4 border-2 outline-0 border-button-color-opaque-25 rounded-3xl py-1 focus:border-button-color transition-all duration-200 ease-in"
          defaultValue="집"
          required
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

        {/* 취향 선택 버튼 */}
        <button
          type="button"
          className="block nahonsan-btn-3d-white border-button-color mx-auto rounded-radius-full mt-16 py-4 px-8 font-basic tracking-paragraph-default font-bold text-size-md"
          onClick={() => setIsClick(!isClick)}
        >
          취향 선택하기
        </button>
      </div>

      {/* 취향 선택 컴포넌트 */}
      <div className={isClick ? 'block' : 'hidden'}>
        <MyTheme state={isClick} onClose={() => setIsClick(false)} />
      </div>

      {/* 회원가입 완료 버튼 */}
      {!isLoading && (
        <button
          type="submit"
          disabled={isLoading}
          className={`nahonsan-btn-3d-sky border-button-color mx-auto rounded-radius-full mt-16 py-4 px-8 font-basic tracking-paragraph-default font-bold text-size-md ${
            isClick ? 'hidden' : 'block'
          } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isLoading ? '가입 중...' : '다음페이지'}
        </button>
      )}
    </form>
  );
}
